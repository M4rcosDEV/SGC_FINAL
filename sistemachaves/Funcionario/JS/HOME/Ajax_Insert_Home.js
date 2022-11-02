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
    function getPredioInferior(){
        $.ajax({
            url: './PHP/Home/getPredioInferior.php',
            type: 'GET',
            dataType: 'html',
            success: (function (resultados){
                $('.Main_Cont3_Bloco-Chaves').html(resultados)
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
            $('.Bloco_Chaves_UL').each((index, elementUL) => {
                $.each(chaves, function (indexC, chave) {
                    if (("Predio_"+chave.idPredio) == elementUL.id && chave.situacao == 0){
                        var text =`<li class="Bloco_Chaves_LI_DISP" id="Predio_${chave.idPredio}">
                                                    <div>
                                                        <input type="checkbox">
                                                    </div>
                                                    <div>
                                                        <img src="../Assets/Chave.png" alt="Ilustração chave">
                                                    </div>
                                                    <div>
                                                        <h4>${chave.descricao} ${chave.idChave}</h4>
                                                        <span>status:</span>
                                                        <div>
                                                            <div></div>
                                                            <h4>Disponivél</h4>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <input type="submit" value="AGENDAR" id="AgendarChave"  class="idChave_${chave.idChave}">
                                                        <input type="submit" value="RETIRAR">
                                                    </div>
                                                </li>`;
                            elementUL.innerHTML += text;
                            $('.idChave_'+chave.idChave).click(()=>{
                                    /*----------------------------------------------------------------------------------*/
                                    var POPUPS = document.querySelector('.POPUPS');
                                    var div_PopupCadPredios = document.querySelector('.PoPuCadastroPredio'); // Cadastro
                                    var div_PopupExcluirPredios = document.querySelector('.PoPuExcluirPredio') // Delete
                                    var div_PopupAgendarChave = document.querySelector('.PoPuAgendarChave') // Agendar
                                    /*----------------------------------------------------------------------------------*/
                                    var buttonAgendarChave = document.getElementById('AgendarChave');
                                    var buttonFechaSubmit = document.getElementById('FechaAgendarChave');
                                    var buttonSubmitAgendarChave = document.getElementById('SubmitAgendarChave');
                                    /*----------------------------------------------------------------------------------*/
                                    document.getElementById('NumeroSalaAgendamento').innerHTML = `${chave.descricao} ${chave.idChave}`;
                                    document.getElementById('NumeroPredioAgendamento').innerHTML = `Predio ${chave.idPredio}`;
                                    /*----------------------------------------------------------------------------------*/
                                        /*Blur*/
                                        POPUPS.style.display = 'flex';
                                        POPUPS.classList.add("active");
                                        /*O que será aberto*/
                                        div_PopupAgendarChave.style.display = "flex";
                                        div_PopupAgendarChave.classList.add("active");
                                        /*O que será oculto*/
                                        div_PopupCadPredios.style.display = "none";
                                        div_PopupExcluirPredios.style.display = "none";
                            
                                    
                                    buttonSubmitAgendarChave.addEventListener('click', ()=>{ // Botão Salvar
                                        /*Blur*/
                                        POPUPS.style.display = 'none';
                                        POPUPS.classList.remove("active");
                                        /*O que será aberto*/   
                                        div_PopupAgendarChave.style.display = "none";
                                        div_PopupAgendarChave.style.display = "none";



                                    });
                                    
                                    buttonFechaSubmit.addEventListener('click', ()=>{ // Botão Fecha
                                        /*Blur*/
                                        POPUPS.style.display = 'none';
                                        POPUPS.classList.remove("active");
                                        /*O que será aberto*/
                                        div_PopupAgendarChave.style.display = "none";
                                        div_PopupAgendarChave.style.display = "none";
                                    });
            
                            })
                        }
                    })
                $.each(chaves, function (indexC, chave) {
                    if (("Predio_"+chave.idPredio) == elementUL.id && chave.situacao == 1){
                            var text2 = `<li class="Bloco_Chaves_LI_USO" id="Predio_${chave.idPredio}">
                            <div>
                                <input type="checkbox">
                            </div>
                            <div>
                                <img src="../Assets/Chave.png" alt="Ilustração chave">
                            </div>
                            <div>
                                <h4>${chave.descricao} ${chave.idChave}</h4>
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
                        elementUL.innerHTML += $text2;
                        
                    }  
                })
            })
        })
    }
    function Agendar(){
        $('.Bloco_Chaves_LI_DISP').remove();
        $('.Bloco_Chaves_LI_USO').remove();
        //Adicionar Chaves aos Blocos Prédio
        $.getJSON('./PHP/Gerenciamento/chave.php', function(chaves){
            $('.Bloco_Chaves_UL').each((index, elementUL) => {
                $.each(chaves, function (indexC, chave) {
                    if (("Predio_"+chave.idPredio) == elementUL.id && chave.situacao == 0){
                            $('.idChave_'+chave.idChave).click(()=>{
                                    /*----------------------------------------------------------------------------------*/
                                    var POPUPS = document.querySelector('.POPUPS');
                                    var div_PopupCadPredios = document.querySelector('.PoPuCadastroPredio'); // Cadastro
                                    var div_PopupExcluirPredios = document.querySelector('.PoPuExcluirPredio') // Delete
                                    var div_PopupAgendarChave = document.querySelector('.PoPuAgendarChave') // Agendar
                                    /*----------------------------------------------------------------------------------*/
                                    var buttonAgendarChave = document.getElementById('AgendarChave');
                                    var buttonFechaSubmit = document.getElementById('FechaAgendarChave');
                                    var buttonSubmitAgendarChave = document.getElementById('SubmitAgendarChave');
                                    /*----------------------------------------------------------------------------------*/
                                    document.getElementById('NumeroSalaAgendamento').innerHTML = `${chave.descricao} ${chave.idChave}`;
                                    document.getElementById('NumeroPredioAgendamento').innerHTML = `Predio ${chave.idPredio}`;
                                    /*----------------------------------------------------------------------------------*/
                                        /*Blur*/
                                        POPUPS.style.display = 'flex';
                                        POPUPS.classList.add("active");
                                        /*O que será aberto*/
                                        div_PopupAgendarChave.style.display = "flex";
                                        div_PopupAgendarChave.classList.add("active");
                                        /*O que será oculto*/
                                        div_PopupCadPredios.style.display = "none";
                                        div_PopupExcluirPredios.style.display = "none";
                            
                                    
                                    buttonSubmitAgendarChave.addEventListener('click', ()=>{ // Botão Salvar
                                        /*Blur*/
                                        POPUPS.style.display = 'none';
                                        POPUPS.classList.remove("active");
                                        /*O que será aberto*/   
                                        div_PopupAgendarChave.style.display = "none";
                                        div_PopupAgendarChave.style.display = "none";

                                        

                                    });
                                    
                                    buttonFechaSubmit.addEventListener('click', ()=>{ // Botão Fecha
                                        /*Blur*/
                                        POPUPS.style.display = 'none';
                                        POPUPS.classList.remove("active");
                                        /*O que será aberto*/
                                        div_PopupAgendarChave.style.display = "none";
                                        div_PopupAgendarChave.style.display = "none";
                                    });
            
                            })
                        }
                    })
            })
        })
    }Agendar();
    /*---------*/
}

GerenciamentoPredios();

// $(document).load(getChaves());

