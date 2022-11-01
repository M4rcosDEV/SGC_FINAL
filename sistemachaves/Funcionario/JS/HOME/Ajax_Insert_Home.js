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
                $('.Main_Cont3_Bloco-Chaves').html(resultados)})
        })
    }
    getPredioInferior();

    function getChaves(){
        $.ajax({
            url: './PHP/Gerenciamento/chave.php',
            type: 'GET',
            dataType: 'JSON',
            
        })
    }

    function RefreshChaves(){
        var btn = document.querySelector('.Refresh_Chaves');
        btn.addEventListener('click', function(){
            var li = document.querySelectorAll('.Bloco_Chaves_LI_DISP')
            $('.Bloco_Chaves_LI_DISP').remove();
            getChaves();
        })
    }
    RefreshChaves();

    function getChaves(){
        //Adicionar Chaves aos Blocos Prédio
        $.getJSON('./PHP/Gerenciamento/chave.php', function(chaves){
            console.log("asd");
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
                                                        <input type="submit" value="AGENDAR">
                                                        <input type="submit" value="RETIRAR">
                                                    </div>
                                                </li>`;
                            elementUL.innerHTML += text;
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
    getChaves();
}
GerenciamentoPredios();

//  --------    Gerenciamento de todas as chaves    --------
function GerenciamentoChaves(){
}
