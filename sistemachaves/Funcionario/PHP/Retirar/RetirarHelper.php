<?php

include_once 'InsertAgendar.php';
include_once 'ClassRetirar.php';
include_once './Conexao.php';

if(isset($_POST['tipo'])){
    $tipo = $_POST['tipo'];
    if($tipo === 'AgendarChave'){
        Retirar_C();
    }
}

function Retirar_C(){
    $id_chave = $_POST['idChave'];
    $id_cliente = $_POST['Matricula'];
    $hora = $_POST['hora'];
    $senha = $_POST['senha'];
    // echo $id_chave;
    $retirada = new Retirar($id_chave, $id_cliente, $hora, $senha);
    $retirada->Retirar_Chave();
    
    // header("Location:../Funcionario/sala.php?id_predio=");
}


?>