function exibirPredios(){
    $.get('./PHP/Home/predio.php', function Predio (predio) {
        var ul_predio = document.querySelector('.Ul_Predios'); 
        var bloco_main3 = document.querySelector('.Main_Cont3');
        
        predio.forEach(element =>{
            /*Adicionar BLOCO de predios na parte em USO*/ 
            ul_predio.innerHTML += `<li class="Modelo_Predio">
                                     <div>
                                         <h4 class="Modelo_Predio_h4_1" >Prédio</h4>
                                         <h4 class="Numeracao_IdPredio">${element["idPredio"]}</h4>
                                     </div>
                                     <img src="../Assets/Prédio.png" alt="Ilustração Prédio">
                                 </li>`;
            /*Adicionar a Coluna com os PREDIOS*/
            bloco_main3.innerHTML += `<div class="Main_Cont3_Bloco-Chaves">
                                            <!-- Nome do Predio -->
                                            <div class="Name_Bloco_Predo">
                                                <div></div>
                                                <h4>Prédio ${element["idPredio"]}</h4>
                                                <div></div>
                                            </div>
                                            <!-- Dados do Predio -->
                                            <div class="Bloco_Chaves">
                                                    <!-- < -->
                                                    <div class="arrow_left_div">
                                                        <button id="arrow_left_chaves" class="arrow_left_Predio_${element["idPredio"]}">
                                                            <i class='bx bx-chevron-left' ></i>
                                                        </button>
                                                    </div>
                                                    <!-- > -->
                                                    <div class="arrow_right_div">
                                                        <button id="arrow_right_chaves" class="Predio_${element["idPredio"]}">
                                                            <i class='bx bx-chevron-right'></i>
                                                        </button>
                                                    </div>
                                                <div class="Container_Chaves_Ul">
                                                    <ul class="Bloco_Chaves_UL" id="Predio_${element["idPredio"]}">

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>`;
            });

    },'JSON');
}

function exibirChaves(){
    $.get('./PHP/Gerenciamento/chave.php', function (chave) {

        var predios1 = document.querySelectorAll('.Bloco_Chaves_UL');

        predios1.forEach((predios) =>{
            chave.forEach((chaves) =>{
                    if (("Predio_"+chaves['idPredio']) == predios.id && chaves['situacao'] == 0){
                        predios.innerHTML += `<li class="Bloco_Chaves_LI_DISP" id="Predio_${chaves['idPredio']}">
                                                <div>
                                                    <input type="checkbox">
                                                </div>
                                                <div>
                                                    <img src="../Assets/Chave.png" alt="Ilustração chave">
                                                </div>
                                                <div>
                                                    <h4>${chaves['descricao']} ${chaves['idChave']}</h4>
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
                    }   
            });
            chave.forEach((chaves) =>{
            if (("Predio_"+chaves['idPredio']) == predios.id && chaves['situacao'] == 1){
                    predios.innerHTML += `<li class="Bloco_Chaves_LI_USO" id="Predio_${chaves['idPredio']}">
                                            <div>
                                                <input type="checkbox">
                                            </div>
                                            <div>
                                                <img src="../Assets/Chave.png" alt="Ilustração chave">
                                            </div>
                                            <div>
                                                <h4>${chaves['descricao']} ${chaves['idChave']}</h4>
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
                    
                }
                
            });
        });
    },'JSON');
}

function carrossel(){
    $.get('./PHP/HOME/CountSala.php', function (idChave){

        var predios = document.querySelectorAll('.Bloco_Chaves_UL');
        var arrowRight = document.querySelectorAll('#arrow_right_chaves');
        var arrowLeft = document.querySelectorAll('#arrow_left_chaves');
        idChave.forEach(elementChave =>{
            predios.forEach(elementPredio =>{
                
                var currentEventCarrRight = 4; // Right
                var currentEventCarrLeft = 4; // left

                arrowRight.forEach(elementRight =>{
                    if (elementChave['COUNT(idChave)'] == 4){
                        elementRight.style.cssText = "display: none";
                    } else {
                        elementRight.style.cssText = "display: flex";
                    }
                    elementRight.addEventListener("click", ()=>{
                        if (elementRight.className == elementPredio.id){
                            if (('Predio_'+elementChave['idPredio']) == elementPredio.id){
                                function right(){
                                    console.log(elementChave['COUNT(idChave)']);
                                    console.log(currentEventCarrRight);

                                    if ((currentEventCarrRight+1) > elementChave['COUNT(idChave)']){
                                        elementPredio.style.cssText = `transform: translate(${(currentEventCarrRight-4)*-400}px);`;
                                        elementRight.style.cssText = `display: none`;
                                    } else if ((currentEventCarrRight) < elementChave['COUNT(idChave)']){
                                        currentEventCarrRight++;
                                        elementPredio.style.cssText = `transform: translate(${(currentEventCarrRight-4)*-300}px);`;
                                        elementRight.style.cssText = `display: flex`;
                                        console.log(currentEventCarrRight);
                                    }
                                }
                                right();
                            }
                        }
                    });
                });

                arrowLeft.forEach(elementLeft =>{
                    if (currentEventCarrRight <= 4){
                        elementLeft.style.cssText = "display: none";
                    } else {
                        elementLeft.style.cssText = "display: flex";
                    }
                    elementLeft.addEventListener("click", ()=>{
                        alert("as");
                        if (elementLeft.className == elementPredio.id){
                            if (('Predio_'+elementChave['idPredio']) == elementPredio.id){

                                function left(){

                                    if ( (currentEventCarrRight-currentEventCarrLeft) == 0 ){
                                        elementPredio.style.cssText = `transform: translate(${0*-400}px);`;
                                        elementLeft.style.cssText = `display: none`;
                                    } else {
                                        currentEventCarrLeft++;
                                        elementPredio.style.cssText = `transform: translate(${(currentEventCarrLeft-4)*300}px);`;
                                        elementLeft.style.cssText = `display: flex`;
                                    }
                                }
                                left();
                            }
                        }
                    });
                });
            });
        });
    }, 'JSON');
}

$(function(){
    exibirPredios();
    exibirChaves();
    carrossel();
});
