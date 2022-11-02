<?php

include_once 'InsertAgendar.php';

if(isset($_POST['tipo'])){
    $tipo = $_POST['tipo'];
    if($tipo === 'AgendarChave'){
        Agendar_C();
    }
}

function Agendar_C(){
    $id_chave = $_POST['idChave'];
    $id_cliente = $_POST['Matricula'];
    $turno = $_POST['turno'];
    $data = $_POST['data'];
    $predio = new Agendar($id_chave, $id_cliente, $turno, $data);
    $predio->Agendar_Chave();
    // header("Location:../Funcionario/sala.php?id_predio=");
}