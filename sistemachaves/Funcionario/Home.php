<?php 
session_start();

    //Se o usuário não estiver logado, ele é redirecionado para a página inicial
    if (!isset($_SESSION["logado"]) || $_SESSION["logado"] !== true) {
        header("location: index.php");
        exit;
    }
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SGC - HOME</title>
    <!-- CSS GLOBAL -->
    <link href='../Funcionario/CSS/GLOBAL/Tab_Bar.css' rel='stylesheet'>
    <link href='../Funcionario/CSS/GLOBAL/ResponseGlobal.css' rel='stylesheet'>
    <!-- CSS -->
    <link href='../Funcionario/CSS/HOME/Home.css' rel='stylesheet'>
    <link href='../Funcionario/CSS/HOME/ResponseHome.css' rel='stylesheet'>
    <!-- JAVASCRIPT -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="../Funcionario/JS/HOME/AjaxHome.js" type="text/javascript" defer></script>
    <script src="../Funcionario/JS/HOME/Home.js" type="text/javascript" defer></script>
    <script src="../Funcionario/JS/GLOBAL/TabBar.js" type="text/javascript" defer></script>
    <!-- CSS ASSETS -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link href='../Funcionario/CSS/GLOBAL/Fonts&Color.css' rel='stylesheet'>
</head>
<body>
    <div class="indicador1">
        <div>
            <i class='bx bx-chevron-left'></i>
            <i class='bx bx-chevron-left'></i>
        </div>
    </div>
    <!-- POPUPS -->
    <div class="POPUPS">
        <!-- Cadastro Prédio -->
        <div class="PoPuCadastroPredio">
            <!-- Formulário Cadastro Prédio -->
            <form class="FormCadastroPredio" action="../Funcionario/PHP/HOME/Predio.php" method="POST">
                <div>
                    <img src="../Assets/Prédio.png" alt="Ilustração Predio">
                    <div></div>
                </div>
                <div>
                    <h4>Novo Prédio</h4>
                    <div>
                        <label for="idCadPredio">Número: </label>
                        <input type="number" name="idCadPredio" id="idCadPredio" placeholder="Digite aqui...">
                        <input style="display: none" name="tipo" type="text" value="cadastrarPredio">
                    </div>
                </div>
                <div>
                    <div><i class='bx bx-x-circle' id="FechaAddPredio"></i></div>
                    <input type="submit" value="Salvar" id="SubmitAddPredio">
                </div>
            </form>
        </div>
        <div class="PoPuExcluirPredio">
            <!-- Formulário Excluir Prédio -->
            <form class="FormExcluirPredio" action="../Funcionario/PHP/HOME/Predio.php" method="POST">
                <div>
                    <img src="../Assets/Prédio.png" alt="Ilustração Predio">
                    <div></div>
                </div>
                <div>
                    <h4>Excluir Prédio</h4>
                    <div>
                        <label for="idExcPredio">Número: </label>
                        <input type="number" name="idExcPredio" id="idExcPredio" placeholder="Digite aqui...">
                        <input style="display: none" name="tipo" type="text" value="excluirPredio">
                    </div>
                </div>
                <div>
                    <div><i class='bx bx-x-circle' id="FechaExcPredio"></i></div>
                    <input type="submit" value="Excluir" id="SubmitExcPredio">
                </div>
            </form>
        </div>
    </div>
    <header class="Header">
        <!-- Barra Laterial -->
        <nav class="Nav">
            <!-- Logo SGC -->
            <div class="Logo_SGC">
                <!-- Logo SGC -->
                <div>
                    <img src="../Assets/Logo 1.png" alt="Logo SGC">
                    <span>Sistema de Gerenciamento de Chaves</span>
                </div>
                <!-- Alternativa Logo SGC -->
                <div>
                    <img src="../Assets/Chave.png" alt="Logo SGC">
    
                </div>  
            </div>
            <!-- Container Com Opções da Barra Lateral -->
            <div class="Container_Opc">
                <!-- Lista dos Itens -->
                <ul class="Ul_Barra">
                    <!-- Item 1 = Home -->
                    <li class="Li_Barra">
                        <a href="../Funcionario/Home.php" class="Item_Barra active">
                            <div class="Div_Item_Barra">
                                <i class='bx bx-home'></i>
                            </div>
                            <span class="Name_Item_Barra Status1">Home</span>
                        </a>
                    </li>
                    <!-- Item 2 = Cadastro -->
                    <li class="Li_Barra">
                        <a href="../Funcionario/Gerenciamento.php" class="Item_Barra">
                            <div class="Div_Item_Barra">
                                <i class='bx bxs-key'></i>
                            </div>
                            <span class="Name_Item_Barra Status1">Gerenciamento</span>
                        </a>
                    </li>
                    <!-- Item 3 = Pendetes -->
                    <li class="Li_Barra">
                        <a href="../Funcionario/Pendente.php" class="Item_Barra">
                            <div class="Div_Item_Barra">
                                <i class='bx bx-time-five'></i>
                            </div>
                            <span class="Name_Item_Barra Status1">Pendente</span>
                        </a>
                    </li>
                    <!-- Item 4 = Solicitações -->
                    <li class="Li_Barra">
                        <a href="../Funcionario/Solicitacoes.php" class="Item_Barra">
                            <div class="Div_Item_Barra">
                                <i class='bx bx-archive-in'></i>
                            </div>
                            <span class="Name_Item_Barra Status1">Solicitações</span>
                        </a>
                    </li>
                    <!-- Item 5 = Agendamento -->
                    <li class="Li_Barra">
                        <a href="../Funcionario/Agendamento.php" class="Item_Barra">
                            <div class="Div_Item_Barra">
                                <i class='bx bx-bell'></i>
                            </div>
                            <span class="Name_Item_Barra Status1">Agendamento</span>
                        </a>
                    </li>
                    <!-- Item 6 = Sobre -->
                    <li class="Li_Barra">
                        <div></div>
                        <a href="#" class="Item_Barra">
                            <div class="Div_Item_Barra">
                                <i class='bx bxs-group'></i>
                            </div>
                            <span class="Name_Item_Barra Status1">Sobre</span>
                        </a>
                    </li>
                    <!-- Item 7 = Sair -->
                    <li class="Li_Barra">
                        <a href="../config/logout.php" class="Item_Barra_Sair">
                            <i class='bx bx-exit'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav> 
        <!-- Indicadores do Status da Barra Lateral -->
            <div class="indicadores">
                <div class="indicador2"></div>
                <div class="indicador3"></div>
            </div>
    </header>
    <main class="Main">
        <!-- Bloco com Nome do Usuário -->
        <div class="Main_Cont1">
            <div class="Name_User">
                <h4>Olá, </h4>
                <h4><?php echo $_SESSION["nomeAdm"];?></h4>
                <h4>!</h4>
            </div>
        </div>
        <!-- Bloco com Predios -->
        <div class="Main_Cont2">
            <!-- Predios -->
            <div>
                <h4>EM USO</h4>
            </div>
            <div class="Container_Predios">
                <ul class="Ul_Predios">
                </ul>
                <li class="Cadastr_Predio">
                    <i class='bx bx-plus' ></i>
                </li>
                <li class="Apagar_Predio">
                    <i class='bx bx-plus' ></i>
                </li>
            </div>
            <div class="Container_Chaves_EmUso" style="display: none;">
                <div class="Container_Chave_EmUso">
                    <ul class="Ul_Chave_EmUso">
                        <li class="Li_Chave_EmUso">
                            <img src="../Assets/Chave.png">
                            <div></div>
                            <h4>Sala 101</h4>
                            <div></div>
                            <h4>Matheus Ulman</h4>
                            <div>
                                <button type="submit"><i class='bx bx-check-double'></i></button>
                                <button type="submit"><i class='bx bx-x'></i></button>
                            </div>
                        </li>
                        <li class="Li_Chave_EmUso">
                            <img src="../Assets/Chave.png">
                            <div></div>
                            <h4>Sala 102</h4>
                            <div></div>
                            <h4>Matheus Ulman</h4>
                            <div>
                                <button type="submit"><i class='bx bx-check-double'></i></button>
                                <button type="submit"><i class='bx bx-x'></i></button>
                            </div>
                        </li>
                        <li class="Li_Chave_EmUso">
                            <img src="../Assets/Chave.png">
                            <div></div>
                            <h4>Sala 103</h4>
                            <div></div>
                            <h4>Matheus Ulman</h4>
                            <div>
                                <button type="submit"><i class='bx bx-check-double'></i></button>
                                <button type="submit"><i class='bx bx-x'></i></button>
                            </div>
                        </li>
                        <li class="Li_Chave_EmUso">
                            <img src="../Assets/Chave.png">
                            <div></div>
                            <h4>Sala 104</h4>
                            <div></div>
                            <h4>Matheus Ulman</h4>
                            <div>
                                <button type="submit"><i class='bx bx-check-double'></i></button>
                                <button type="submit"><i class='bx bx-x'></i></button>
                            </div>
                        </li>
                        <li class="Li_Chave_EmUso">
                            <img src="../Assets/Chave.png">
                            <div></div>
                            <h4>Sala 105</h4>
                            <div></div>
                            <h4>Matheus Ulman</h4>
                            <div>
                                <button type="submit"><i class='bx bx-check-double'></i></button>
                                <button type="submit"><i class='bx bx-x'></i></button>
                            </div>
                        </li>
                        <li class="Li_Chave_EmUso">
                            <img src="../Assets/Chave.png">
                            <div></div>
                            <h4>Sala 106</h4>
                            <div></div>
                            <h4>Matheus Ulman</h4>
                            <div>
                                <button type="submit"><i class='bx bx-check-double'></i></button>
                                <button type="submit"><i class='bx bx-x'></i></button>
                            </div>
                        </li>
                        <li class="Li_Chave_EmUso">
                            <img src="../Assets/Chave.png">
                            <div></div>
                            <h4>Sala 107</h4>
                            <div></div>
                            <h4>Matheus Ulman</h4>
                            <div>
                                <button type="submit"><i class='bx bx-check-double'></i></button>
                                <button type="submit"><i class='bx bx-x'></i></button>
                            </div>
                        </li>
                        <li class="Li_Chave_EmUso">
                            <img src="../Assets/Chave.png">
                            <div></div>
                            <h4>Sala 108</h4>
                            <div></div>
                            <h4>Matheus Ulman</h4>
                            <div>
                                <button type="submit"><i class='bx bx-check-double'></i></button>
                                <button type="submit"><i class='bx bx-x'></i></button>
                            </div>
                        </li>
                        <li class="Li_Chave_EmUso">
                            <img src="../Assets/Chave.png">
                            <div></div>
                            <h4>Sala 109</h4>
                            <div></div>
                            <h4>Matheus Ulman</h4>
                            <div>
                                <button type="submit"><i class='bx bx-check-double'></i></button>
                                <button type="submit"><i class='bx bx-x'></i></button>
                            </div>
                        </li>
                        <li class="Li_Chave_EmUso">
                            <img src="../Assets/Chave.png">
                            <div></div>
                            <h4>Sala 110</h4>
                            <div></div>
                            <h4>Matheus Ulman</h4>
                            <div>
                                <button type="submit"><i class='bx bx-check-double'></i></button>
                                <button type="submit"><i class='bx bx-x'></i></button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Bloco com Chaves -->
        <div class="Main_Cont3">
            <!-- Bloco Chaves -->
            <div class="Main_Cont3_Bloco1">
                <h4>CHAVES</h4>
                <div>
                    <i class='bx bx-slider'></i>
                    <span>Filtros</span>
                </div>
            </div>
            <!-- Predio -->
            <div class="Main_Cont3_Bloco-Chaves">                                      
        </div>
    </main>
</body>
</html>