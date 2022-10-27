<?php

    include_once ('insertChaves.php');

    if(isset($_POST['tipo'])){
        $tipo = $_POST['tipo'];
        if($tipo == "AddChave"){
            cadastroChave();
        }
    }

    function cadastroChave(){
        $idChave = $_POST['idChave'];
        $Situacao = 0;
        $idPredio = $_POST['idPredio'];
        $Descricao = $_POST['DescriChave'];
        $chave = new Chave($idChave, $Situacao, $idPredio, $Descricao);
        $chave -> inserirChave();
        $chave -> inserirSala();
        header("Location: http://localhost/SISTEMACHAVES/Funcionario/Gerenciamento.php");
    }

    function exibirChaves(){
        $banco = new Banco();
        $conn = $banco -> conectar();
        $sql = $conn->prepare("SELECT * FROM chave");
        $sql -> execute();
            $dadosChave = $sql->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($dadosChave);
    }
    print_r(exibirChaves());