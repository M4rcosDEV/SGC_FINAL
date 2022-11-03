//  --------    Gerenciamento de todas os predios    --------
function GerenciamentoPredios(){

    //Inserir novo prédio do banco de dados
    function InsertPredio(){
        $('#FormCadastroPredio').submit(function(event){
            event.preventDefault();
            $.ajax({
                url: './PHP/Home/Predio.php',
                type: 'POST',
                dataType: 'HTML',
                data: {
                    'tipo': 'cadastrarPredio',
                    'idNovoPredio': $('#idNewPredio').val()
                },
                success: function(data){
                    alert(data);
                    $('#idCadPredio').val('');
                    getPredioInferior();
                    getPredioSuperior();
                    GerenciamentoChaves(); //Atualizar chaves
                    getChaves();
                }
            })
        });    
    }
    InsertPredio();

    //Excluir prédio do banco de dados
    function ExcluirPredio(){
        $('#FormExcluirPredio').submit(function(event){
            event.preventDefault();
            $.ajax({
                url: './PHP/Home/Predio.php',
                type: 'POST',
                dataType: 'HTML',
                data: {
                    'tipo': 'excluirPredio',
                    'idExclPredio': $('#idDelePredio').val()
                },
                success: function(data){
                    alert(data);
                    $('#idDelePredio').val('');
                    getPredioInferior();
                    getPredioSuperior();
                    GerenciamentoChaves(); //Atualizar chaves
                    getChaves();
                }
            })
        })
    }
    ExcluirPredio();

    //Get Predios Bloco Superior
    function getPredioSuperior(){
        $.ajax({
            url: './PHP/Home/getPredioSuperior.php',
            type: 'GET',
            dataType: 'html',
            success: (function (resultados){
                $('.Ul_Predios').html(resultados)})
        })
    }
    getPredioSuperior();
    
    //Get Predios Bloco Inferior + Carrossel
    function getPredioInferior(){
        $('.Main_Cont3_Bloco-Chaves .Main_Cont3_Bloco-Chaves').remove()
        $.ajax({
            url: './PHP/Home/getPredioInferior.php',
            type: 'GET',
            dataType: 'JSON',
            success: (function (resultados){
                var bloco_predios = document.querySelector('.Main_Cont3_Bloco-Chaves');
                $.each(resultados, (index, item) => {
                    var texteHTML = `<div class='Main_Cont3_Bloco-Chaves'>
                                    <!-- Nome do Predio -->
                                    <div class='Name_Bloco_Predo'>
                                        <div></div>
                                        <h4>Prédio ${item['idPredio']}</h4>
                                        <div></div>
                                    </div>
                                    <!-- Dados do Predio -->
                                    <div class='Bloco_Chaves'>
                                            <!-- < -->
                                            <div class="arrow_left_div">
                                                <button id="arrow_left_chaves" class="Predio_${item['idPredio']}">
                                                    <i class='bx bx-chevron-left'></i>
                                                </button>
                                            </div>
                                            <!-- > -->
                                            <div class="arrow_right_div">
                                                <button id="arrow_right_chaves" class="Predio_${item['idPredio']}">
                                                    <i class='bx bx-chevron-right'></i>
                                                </button>
                                            </div>
                                        <div class='Container_Chaves_Ul'>
                                            <ul class='Bloco_Chaves_UL' id='Predio_${item['idPredio']}'>
                                            </ul>
                                        </div>
                                    </div>
                                </div>`;
                    bloco_predios.innerHTML += texteHTML
                    
                })
                function Carrossel(){   
                    var arrowRight = document.querySelectorAll('#arrow_right_chaves');
                    var arrowLeft = document.querySelectorAll('#arrow_left_chaves')
                    $.get('./PHP/Home/CountSala.php', function (countChave){
                        countChave.forEach(elementPredio => {
                            var currentClick = 4;
                            console.log(elementPredio['COUNT(idChave)'])
                            arrowLeft.forEach(elementArrowL => {
                                if (elementPredio['COUNT(idChave)'] > 3){
                                } 
                                else {
                                    elementArrowL.style.cssText = "display: none";
                                }

                                elementArrowL.addEventListener('click', ()=>{
                                    
                                    if (elementArrowL.className == ('Predio_'+elementPredio['idPredio'])){

                                        var ul = document.querySelector(`.Container_Chaves_Ul #Predio_${elementPredio['idPredio']}`);
                                        if (currentClick-4 == 0){
                                            ul.style.cssText = `margin-left: ${(currentClick-4)*-300}px;`
                                            elementArrowL.style.cssText = "display: none";
                                            
                                        } else {
                                            currentClick--;
                                            ul.style.cssText = `margin-left: ${(currentClick-4)*-300}px;`
                                        }
                                    }
                                })
                            })

                            arrowRight.forEach(elementArrowR =>{

                                if (elementArrowR.className == ('Predio_'+elementPredio['idPredio'])){
                                    if (elementPredio['COUNT(idChave)'] > 4){
                                        elementArrowR.style.cssText = "display: flex";
                                    } else {
                                        elementArrowR.style.cssText = "display: none";
                                    }
                                }        
                                elementArrowR.addEventListener('click', ()=>{
                                    arrowLeft.forEach(elementArrowL => {
                                        if (elementArrowR.className == elementArrowL.className){
                                            elementArrowL.style.cssText = "display: flex";
                                        }
                                    })
                                    
                                    if (elementArrowR.className == ('Predio_'+elementPredio['idPredio'])){
                                        var ul = document.querySelector(`.Container_Chaves_Ul #Predio_${elementPredio['idPredio']}`);
                                        
                                        console.log(currentClick)
                                        if (currentClick == elementPredio['COUNT(idChave)']){
                                            ul.style.cssText = `margin-left: ${(currentClick-4)*-300}px;`
                                            elementArrowR.style.cssText = "display: flex";
                                        } else {
                                            currentClick++;
                                            elementArrowR.style.cssText = "display: flex";
                                            ul.style.cssText = `margin-left: ${(currentClick-4)*-300}px;`
                                        }
                                    }
                                })
                            })
                        })
                    }, 'JSON')
                }
                Carrossel();
                getChaves();
            })
        })
    }
    getPredioInferior();

    //Button Refresh
    function RefreshChaves(){
        var btn = document.querySelector('.Refresh_Chaves');
        btn.addEventListener('click', function(){
            getChaves();
        })
    }
    RefreshChaves();

    //Get Todas as Chaves do Banco
    function getChaves(){
        $('.Bloco_Chaves_LI_DISP').remove();
        $('.Bloco_Chaves_LI_USO').remove();
        //Adicionar Chaves aos Blocos Prédio
        $.getJSON('./PHP/Gerenciamento/chave.php', function(chaves){
            $('.Bloco_Chaves_UL').each((index, ul) => {

                $.each(chaves, function(index, chavesLI){
                    if (("Predio_"+chavesLI['idPredio']) == ul.id && chavesLI['situacao'] == 0){
                        var text =`<li class="Bloco_Chaves_LI_DISP" id="Predio_${chavesLI['idPredio']}">
                                                    <div>
                                                        <input type="checkbox">
                                                    </div>
                                                    <div>
                                                        <img src="../Assets/Chave.png" alt="Ilustração chave">
                                                    </div>
                                                    <div>
                                                        <h4>${chavesLI['descricao']} ${chavesLI['idChave']}</h4>
                                                        <span>status:</span>
                                                        <div>
                                                            <div></div>
                                                            <h4>Disponivél</h4>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <input type="submit" value="AGENDAR" id="AgendarChave"  class="idChave_${chavesLI['idChave']}">
                                                        <input type="submit" value="RETIRAR" id="RetirarChave"  class="idChave_${chavesLI['idChave']}">
                                                    </div>
                                                </li>`;
                            ul.innerHTML += text;
                        }
                })
                $.each(chaves, function(index, chavesLI){
                    if (("Predio_"+chavesLI['idPredio']) == ul.id && chavesLI['situacao'] == 1){
                        var text2 = `<li class="Bloco_Chaves_LI_USO" id="Predio_${chavesLI['idPredio']}">
                                        <div>
                                            <input type="checkbox">
                                        </div>
                                        <div>
                                            <img src="../Assets/Chave.png" alt="Ilustração chave">
                                        </div>
                                        <div>
                                            <h4>${chavesLI['descricao']} ${chavesLI['idChave']}</h4>
                                            <span>status:</span>
                                            <div>
                                                <div></div>
                                                <h4>Em Uso</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <input type="submit" value="AGENDAR">
                                            <input type="submit" value="RETIRAR">
                                        </div>
                                    </li>`;
                        ul.innerHTML += text2;
                    
                }  

                })
            })
            var AgendarLi = document.querySelectorAll('#AgendarChave');
            $.each(AgendarLi, (indexLi, Li) =>{
                Li.addEventListener('click', ()=>{
                    function popupAgendar(){
                        $.getJSON('./PHP/Gerenciamento/chave.php', function(chaves){
                                $.each(chaves, function(indexChave, chavesLI){
                                    if (indexLi == indexChave){
                                        /*----------------------------------------------------------------------------------*/
                                        var POPUPS = document.querySelector('.POPUPS');
                                        var div_PopupCadPredios = document.querySelector('.PoPuCadastroPredio'); // Cadastro
                                        var div_PopupExcluirPredios = document.querySelector('.PoPuExcluirPredio') // Delete
                                        var div_PopupAgendarChave = document.querySelector('.PoPuAgendarChave') // Agendar
                                        var div_PopupRetirarChave = document.querySelector('.PoPuRetirarChave') // Agendar
                                        /*----------------------------------------------------------------------------------*/
                                        var buttonFechaSubmit = document.getElementById('FechaAgendarChave');
                                        var buttonSubmitAgendarChave = document.getElementById('SubmitAgendarChave');
                                        document.getElementById('NumeroSalaAgendamento').innerHTML = `${chavesLI['descricao']} ${chavesLI['idChave']}`;
                                        document.getElementById('NumeroPredioAgendamento').innerHTML = `Predio ${chavesLI['idPredio']}`;
                                        /*----------------------------------------------------------------------------------*/
                                        /*Blur*/
                                            POPUPS.style.display = 'flex';
                                            POPUPS.classList.add("active");
                                        /*O que será aberto*/
                                            div_PopupAgendarChave.style.display = "flex";
                                            div_PopupAgendarChave.classList.add("active");
                                        /*O que será oculto*/
                                            div_PopupRetirarChave.style.display = "none";
                                            div_PopupCadPredios.style.display = "none";
                                            div_PopupExcluirPredios.style.display = "none";
                                            
                                        buttonSubmitAgendarChave.addEventListener('click', (event)=>{ // Botão Salvar
                                            event.preventDefault();
                                                    $.ajax({
                                                        url: './PHP/Agendar/postAgendar.php',
                                                        type: 'POST',
                                                        dataType: 'HTML',
                                                        data:{
                                                            'tipo': 'AgendarChave',
                                                            'idChave': chavesLI['idChave'],
                                                            'Matricula': $('#Matricula_agendamento').val(),
                                                            'turno': $('#turno_agendamento').val(),
                                                            'data': $('#data_agendamento').val()
                                                        },
                                                        success: (function(msg){
                                                            console.log(msg);
                                                            console.log($('#data_agendamento').val());
                                                            /*Blur*/
                                                            POPUPS.style.display = 'none';
                                                            POPUPS.classList.remove("active");
                                                            /*O que será aberto*/
                                                            div_PopupAgendarChave.style.display = "none";
                                                            div_PopupAgendarChave.style.display = "none";
                                                            
                                                })
                                            })
                                        })

                                        buttonFechaSubmit.addEventListener('click', ()=>{ // Botão Fecha
                                            /*Blur*/
                                            POPUPS.style.display = 'none';
                                            POPUPS.classList.remove("active");
                                            /*O que será aberto*/
                                            div_PopupAgendarChave.style.display = "none";
                                            div_PopupAgendarChave.style.display = "none";
                                        });
                                    }
                            })
                        })
                    }
                    popupAgendar();
                })
            })
            var RetirarLi = document.querySelectorAll('#RetirarChave');
            $.each(RetirarLi, (indexLi, Li) =>{
                Li.addEventListener('click', ()=>{
                    function popupRetirar(){
                        $.getJSON('./PHP/Gerenciamento/chave.php', function(chaves){
                                $.each(chaves, function(indexChave, chavesLI){
                                    if (indexLi == indexChave){
                                        /*----------------------------------------------------------------------------------*/
                                        var POPUPS = document.querySelector('.POPUPS');
                                        var div_PopupCadPredios = document.querySelector('.PoPuCadastroPredio'); // Cadastro
                                        var div_PopupExcluirPredios = document.querySelector('.PoPuExcluirPredio') // Delete
                                        var div_PopupAgendarChave = document.querySelector('.PoPuAgendarChave') // Agendar
                                        var div_PopupRetirarChave = document.querySelector('.PoPuRetirarChave') // Agendar
                                        /*----------------------------------------------------------------------------------*/
                                        var buttonFechaSubmit = document.getElementById('FechaRetirarChave');
                                        var buttonSubmitRetirarChave = document.getElementById('SubmitRetirarChave');
                                        document.getElementById('NumeroSalaRetirar').innerHTML = `${chavesLI['descricao']} ${chavesLI['idChave']}`;
                                        document.getElementById('NumeroPredioRetirar').innerHTML = `Predio ${chavesLI['idPredio']}`;
                                        /*----------------------------------------------------------------------------------*/
                                        /*Blur*/
                                            POPUPS.style.display = 'flex';
                                            POPUPS.classList.add("active");
                                        /*O que será aberto*/
                                            div_PopupRetirarChave.style.display = "flex";
                                            div_PopupRetirarChave.classList.add("active");
                                        /*O que será oculto*/
                                            div_PopupCadPredios.style.display = "none";
                                            div_PopupExcluirPredios.style.display = "none";
                                            div_PopupAgendarChave.style.display = "none";

                                            buttonSubmitRetirarChave.addEventListener('click', (event)=>{ // Botão Salvar
                                            event.preventDefault();
                                                    $.ajax({
                                                        url: './PHP/Agendar/postAgendar.php',
                                                        type: 'POST',
                                                        dataType: 'HTML',
                                                        data:{
                                                            'tipo': 'AgendarChave',
                                                            'idChave': chavesLI['idChave'],
                                                            'Matricula': $('#Matricula_agendamento').val(),
                                                            'turno': $('#turno_agendamento').val(),
                                                            'data': $('#data_agendamento').val()
                                                        },
                                                        success: (function(msg){
                                                            console.log(msg);
                                                            /*Blur*/
                                                            POPUPS.style.display = 'none';
                                                            POPUPS.classList.remove("active");
                                                            /*O que será aberto*/
                                                            div_PopupRetirarChave.style.display = "none";
                                                            div_PopupRetirarChave.style.display = "none";
                                                })
                                            })
                                        })

                                        buttonFechaSubmit.addEventListener('click', ()=>{ // Botão Fecha
                                            /*Blur*/
                                            POPUPS.style.display = 'none';
                                            POPUPS.classList.remove("active");
                                            /*O que será aberto*/
                                            div_PopupRetirarChave.style.display = "none";
                                            div_PopupRetirarChave.style.display = "none";
                                        });
                                    }
                            })
                        })
                    }
                    popupRetirar();
                })
            })
        })
    }

    function getSalas(){
        
    }
}
GerenciamentoPredios();
