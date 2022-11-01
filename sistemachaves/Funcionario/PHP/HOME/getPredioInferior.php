<?php
    
    include_once ('Predio.php');

    function exibir(){
        $banco = new Banco();
        $conexao = $banco -> conectar();
            $stmt = $conexao -> prepare("SELECT * FROM predio");
            $stmt -> execute();
                $stmt = $stmt->fetchAll(PDO::FETCH_ASSOC);
                foreach ($stmt as $id) {
                    echo " <div class='Main_Cont3_Bloco-Chaves'>
                    <!-- Nome do Predio -->
                    <div class='Name_Bloco_Predo'>
                        <div></div>
                        <h4>Prédio ".$id['idPredio']."</h4>
                        <div></div>
                    </div>
                    <!-- Dados do Predio -->
                    <div class='Bloco_Chaves'>
                            <!-- < -->

                            <!-- > -->
                            <div class='arrow_right_div'>
                                <button id='arrow_right_chaves' class='Predio_".$id['idPredio']."'>
                                    <i class='bx bx-chevron-right'></i>
                                </button>
                            </div>
                        <div class='Container_Chaves_Ul'>
                            <ul class='Bloco_Chaves_UL' id='Predio_".$id['idPredio']."'>
                            </ul>
                        </div>
                    </div>
                </div>";
                }
    }   
    
    exibir();
    header("Refresh: 1");