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
                                                        <button id="arrow_left_chaves" class="Predio_${element["idPredio"]}">
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
            //Inserir chaves com status de disponivel
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
            //Inserir chaves com status de uso
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
    },'JSON')
}

function carrossel(){
    $.get('./PHP/HOME/CountSala.php', function (idChave){

        var predios = document.querySelectorAll('.Bloco_Chaves_UL');
        var arrowRight = document.querySelectorAll('#arrow_right_chaves');
        var arrowLeft = document.querySelectorAll('#arrow_left_chaves');
        
        idChave.forEach(elementChave =>{

            predios.forEach(elementPredio =>{

                var CarrLeft = 0; // left

                arrowLeft.forEach(elementLeft =>{
                    arrowRight.forEach(elementRight =>{
                        var currentEventCarrRight = 0; // Right

                        elementLeft.style.cssText = `display: none`; //Padrão o Left do Carrossel começa como oculto

                        function Right(){ //Só para Verificar se o lenght é maior que 4 ou não
                                            //-> 4 é a quantidade de aparece na tela
                            if (elementLeft.className == elementPredio.id && elementRight.className == elementPredio.id){
                                if (('Predio_'+elementChave['idPredio']) == elementPredio.id){
                                    if (elementChave['COUNT(idChave)'] < 4){
                                        elementLeft.style.cssText = `display: none`;
                                        elementRight.style.cssText = `display: none`;
                                    }
                                }
                            }
                        }
                        Right();

                        //São as causalidades, essas que são testadas a cada click ----------------
                        //-> por isso é uma função e está em todos os addEvent
                        function LeftRight(){
                            if (elementLeft.className == elementPredio.id && elementRight.className == elementPredio.id){
                                if (('Predio_'+elementChave['idPredio']) == elementPredio.id){
                                    if (elementChave['COUNT(idChave)'] < 4){
                                        elementLeft.style.cssText = `display: none`;
                                        elementRight.style.cssText = `display: none`;
                                    } else {
                                        elementRight.style.cssText = `display: flex`;
                                    } 
                                    if (currentEventCarrRight > 0){
                                        elementLeft.style.cssText = `display: flex`;
                                    } else if (currentEventCarrRight == 0){
                                        elementLeft.style.cssText = `display: none`;
                                    }
                                }
                            }
                        }

                        //Para quando aperta no LEFT do carrossel
                        elementLeft.addEventListener("click", ()=>{
                                if (elementLeft.className == elementPredio.id){
                                    if (('Predio_'+elementChave['idPredio']) == elementPredio.id){
                                        if ((currentEventCarrRight+5) == elementChave['COUNT(idChave)']){
                                            var aux = currentEventCarrRight - 1;
                                            elementPredio.style.cssText = `transform: translate(${(aux)*-300}px);`;
                                            elementRight.style.cssText = `display: none`;
                                        }else if ((currentEventCarrRight) == 0){
                                            elementPredio.style.cssText = `transform: translate 0px);`;
                                        } else {
                                            currentEventCarrRight--;
                                            elementPredio.style.cssText = `transform: translate(${(currentEventCarrRight)*-300}px);`;
                                        } 
                                    }
                                    console.log("left" + currentEventCarrRight)
                                }
                            LeftRight();
                        });    
                        //Para quando aperta no RIGHT do carrossel
                        elementRight.addEventListener("click", ()=>{
                            if (elementRight.className == elementPredio.id){
                                if (('Predio_'+elementChave['idPredio']) == elementPredio.id){
                                        if ((currentEventCarrRight+5) == elementChave['COUNT(idChave)']){
                                            var aux = currentEventCarrRight + 1;
                                            elementPredio.style.cssText = `transform: translate(${(aux)*-300}px);`;
                                            elementRight.style.cssText = `display: none`;
                                        } else if ((currentEventCarrRight) < elementChave['COUNT(idChave)']){
                                            currentEventCarrRight++;
                                            elementPredio.style.cssText = `transform: translate(${(currentEventCarrRight)*-300}px);`;
                                            LeftRight(); 
                                        }
                                }
                                console.log("right" + currentEventCarrRight)
                            } 
                        });
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
