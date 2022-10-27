<?php

include_once 'Insert.php';

if(isset($_POST['tipo'])){
    $tipo = $_POST['tipo'];
    if($tipo === "cadastrarPredio"){
        cadastrar_Predio();
    } else if($tipo === "excluirPredio"){
        excluir_Predio();
    }
}

function cadastrar_Predio(){
    $idCadPredio = $_POST['idCadPredio'];
    $predio = new Predio($idCadPredio);
    $predio->inserir();
    header("Location: http://localhost/SISTEMACHAVES/Funcionario/Home.php");
}

function excluir_Predio(){
    $idExcPredio = $_POST["idExcPredio"];
    $predio = new Predio($idExcPredio);
    $predio->excluir();
    header("Location: http://localhost/SISTEMACHAVES/Funcionario/Home.php");
}

function exibir(){
    $banco = new Banco();
    $conexao = $banco -> conectar();
        /*dados*/
        $stmt = $conexao -> prepare("SELECT * FROM predio");
        $stmt -> execute();
            $stmt = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($stmt);
}

print_r (exibir());