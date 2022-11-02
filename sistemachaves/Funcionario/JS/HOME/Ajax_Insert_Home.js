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
    
    //Get Predios Bloco Inferior
    /*function getPredioInferior(){
        $.ajax({
            url: './PHP/Home/getPredioInferior.php',
            type: 'GET',
            dataType: 'html',
            success: (function (resultados){
                $('.Main_Cont3_Bloco-Chaves').html(resultados)
                getChaves();
            })
        })
    }*/
    function getPredioInferior(){
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
                
                                            <!-- > -->
                                            <div class='arrow_right_div'>
                                                <button id='arrow_right_chaves' class='Predio_"${item['idPredio']}"'>
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
                getChaves();
            })
        })
    }
    getPredioInferior();


    function RefreshChaves(){
        var btn = document.querySelector('.Refresh_Chaves');
        btn.addEventListener('click', function(){
            getChaves();
        })
    }
    RefreshChaves();


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
            })
            // $.each(aux, (index1, li) => {
            //         li.addEventListener('click', () => {
            //             $.each(chaves, function(index, chavesLI){

            //                 if (index1 == index){
            //                     console.log(chavesLI['idChave'])
            //                     var count = document.querySelector('.Bloco_Chaves_LI_DISP' + ' .idChave_'+chavesLI['idChave'])
            //                     console.log(count)
            //                     popup();
            //                     function popup(){
            //                         /*----------------------------------------------------------------------------------*/
            //                         var POPUPS = document.querySelector('.POPUPS');
            //                         var div_PopupCadPredios = document.querySelector('.PoPuCadastroPredio'); // Cadastro
            //                         var div_PopupExcluirPredios = document.querySelector('.PoPuExcluirPredio') // Delete
            //                         var div_PopupAgendarChave = document.querySelector('.PoPuAgendarChave') // Agendar
            //                         /*----------------------------------------------------------------------------------*/
            //                         var buttonAgendarChave = document.querySelector('.Bloco_Chaves_LI_DISP' + ' .idChave_'+chavesLI['idChave']);
            //                         var buttonFechaSubmit = document.getElementById('FechaAgendarChave');
            //                         var buttonSubmitAgendarChave = document.querySelector('.Bloco_Chaves_LI_DISP' + ' .idChave_'+chavesLI['idChave']);
            //                         /*----------------------------------------------------------------------------------*/
            //                         document.getElementById('NumeroSalaAgendamento').innerHTML = `${chavesLI['descricao']} ${chavesLI['idChave']}`;
            //                         document.getElementById('NumeroPredioAgendamento').innerHTML = `Predio ${chavesLI['idPredio']}`;
            //                         /*----------------------------------------------------------------------------------*/
            //                         buttonAgendarChave.addEventListener('click', ()=>{
            //                             /*Blur*/
            //                             POPUPS.style.display = 'flex';
            //                             POPUPS.classList.add("active");
            //                             /*O que será aberto*/
            //                             div_PopupAgendarChave.style.display = "flex";
            //                             div_PopupAgendarChave.classList.add("active");
            //                             /*O que será oculto*/
            //                             div_PopupCadPredios.style.display = "none";
            //                             div_PopupExcluirPredios.style.display = "none";
            //                         })

            //                     }
            //                 }
            //             })
            //         })
            //     })
            var AgendarLi = document.querySelectorAll('#AgendarChave');
            $.each(AgendarLi, (indexLi, Li) =>{
                Li.addEventListener('click', ()=>{
                    function popup(){
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
                    popup();
                })
            })
            var RetirarLi = document.querySelectorAll('#RetirarChave');
            $.each(RetirarLi, (indexLi, Li) =>{
                Li.addEventListener('click', ()=>{
                    function popup(){
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
                                        document.getElementById('NumeroSalaAgendamento').innerHTML = `${chavesLI['descricao']} ${chavesLI['idChave']}`;
                                        document.getElementById('NumeroPredioAgendamento').innerHTML = `Predio ${chavesLI['idPredio']}`;
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
                    popup();
                })
            })
        })
    }
}

GerenciamentoPredios();
/*$(document).load(getChaves());*/
