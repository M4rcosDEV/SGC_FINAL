$(document).ready(function(){
    function getPredioSuperior(){
        $.ajax({
            url: './PHP/Home/getPredioSuperior.php',
            type: 'GET',
            dataType: 'html',
            success: (function (resultados){
                $('.Ul_Predios').html(resultados)})
        })
        setInterval(function(){
            $('.Ul_Predios').load('./PHP/Home/getPredioSuperior.php').fadeIn("slow");
        }, 1000)
    }
    getPredioSuperior();

    function getPredioInferior(){
        $.ajax({
            url: './PHP/Home/getPredioSuperior.php',
            type: 'GET',
            dataType: 'html',
            success: (function (resultados){
                $('.Main_Cont3').html(resultados)})
        })
        setInterval(function(){
            $('.Main_Cont3').load('./PHP/Home/getPredioInferior.php').fadeIn("slow");
        }, 1000)
    }
    getPredioInferior();

    function getPredioInferior(){
        $.ajax({
            url: './PHP/Home/getPredioSuperior.php',
            type: 'GET',
            dataType: 'html',
            success: (function (resultados){
                $('.Main_Cont3').html(resultados)})
        })
        const Refre = setInterval(function(){
            $('.Main_Cont3').load('./PHP/Home/getPredioInferior.php').fadeIn("slow");
        }, 1000)
        const Interv = function Intervalo (){
            clearInterval(Refre, 2000);
        }
        Refre();
        Interv();
    }
    getPredioInferior();

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
    }
    getChaves();

});