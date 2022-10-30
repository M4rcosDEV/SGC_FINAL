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
                }
            })
        })
    }
    ExcluirPredio();

    /*function getPredioSupeior(){
        $.ajax({
            url: './PHP/Home/getPredioSuperior.php',
            type: 'GET',
            dataType: 'html',
            success: (function (resultados){
                $('.Ul_Predios').html(resultados)})

        }).then(function(){
            setTimeout(getPredioSupeior, 1000);
        })
    }
    getPredioSupeior();*/

    /*$.on('change', getPredioInferior(){
        $.ajax({
            url: './PHP/Home/getPredioInferior.php',
            type: 'GET',
            dataType: 'html',
            success: (function (resultados){
                $('#Main_Cont3_Bloco_Chaves_Inferior').html(resultados)
            })

        })/*.then(function(){
            setTimeout(getPredioInferior, 1000);
        })*/
    /*}
    /*getPredioInferior();*/
}
/*
function getChaves(){
    $.getJSON('./PHP/Gerenciamento/chave.php', function(chaves){

        var Predios = document.querySelectorAll('.Bloco_Chaves_UL');
        Predios.forEach( elementPredio =>{
            chaves.forEach( elementChaves =>{
                if (("Predio_"+elementChaves['idPredio']) == elementPredio.id && elementChaves['situacao'] == 0){
                    var aux = ( `<li class="Bloco_Chaves_LI_DISP" id="Predio_${elementChaves['idPredio']}">
                                                <div>
                                                    <input type="checkbox">
                                                </div>
                                                <div>
                                                    <img src="../Assets/Chave.png" alt="Ilustração chave">
                                                </div>
                                                <div>
                                                    <h4>${elementChaves['descricao']} ${elementChaves['idChave']}</h4>
                                                    <span>status:</span>
                                                    <div>
                                                        <div></div>
                                                        <h4>Disponivél</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <input type="submit" value="AGENDAR">
                                                    <input type="submit" value="RETIRAR">
                                                </div>
                                            </li>`);
                    
                    $(elementPredio).load(aux);
                }
            })
        })
    })
}*/
GerenciamentoPredios();
