<?php

include_once '../Conexao.php';

class Agendar{
    public $idChave;
    public $Turno;
    public $id_cliente;
    public $Data;
    
    function __construct($idChave, $id_cliente, $Turno, $Data){
        $this->idChave = $idChave;   
        $this->id_cliente = $id_cliente; 
        $this->Turno = $Turno; 
        $this->Data =  DATE($Data);  
    }

    function Agendar_Chave(){
        $banco = new Banco();
        $conexao = $banco->conectar();
        try{
            $stmt = $conexao->prepare("INSERT INTO agendar (idChave, id_cliente, turno, data_agendar) 
            VALUES (:idChave, :id_cliente, :turno, :data_agendar)");
            
            $stmt->bindParam(':idChave', $this->idChave);
            $stmt->bindParam(':id_cliente', $this->id_cliente);
            $stmt->bindParam(':turno', $this->Turno);
            $stmt->bindParam(':data_agendar', $this->Data);
            $stmt->execute();
            
            echo "Chave agendada";
            
        } catch(PDOException $ex){
            echo "Erro ao excluir predio: " . $ex;
        }
    }
}