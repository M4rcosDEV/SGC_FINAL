<?php

include_once '../Conexao.php';

header("refresh: 1");

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

            // $hoje = date('Y/m/d');

            // if($hoje == $this->Data){
            // $stmt = $conexao->prepare("UPDATE chave SET situacao = 1 WHERE idChave = :id_chave");
            // $stmt->bindParam('id_chave', $this->idChave);
            // }
            $stmt->execute();
<<<<<<< HEAD

=======
            
            
>>>>>>> 8dc0174c1dd9a6a4a6c526ff1f93b40a4e571631
            echo "Chave agendada";
            

        } catch(PDOException $ex){
            echo "Erro ao excluir predio: " . $ex;
        }
    }
<<<<<<< HEAD
}
=======
    function registrarUSO(){
        //$dataEntrega = $this->Data;
        $banco = new Banco();
        $conexao = $banco->conectar();
        //$dtEntrega=date("Y-m-d",strtotime($dataEntrega));

        $hoje = date('Y-m-d');
        try{
            if('2022/11/06' == '2022/11/06'){
                $stmt = $conexao->prepare("UPDATE chave SET situacao = 1 WHERE idChave = :id_chave");
                $stmt->bindParam('id_chave', $this->idChave);
    
                $stmt->execute();
            
                echo "Chave agendada";
            }

        } catch(PDOException $ex){
            echo "Erro ao excluir predio: " . $ex;
        }
        // //$dataUser = '2022/11/02';
        // $hoje = date('Y/m/d');
    
        // if($hoje == $this->Data){
        //     //echo 'Chave indisponivel';
        //     $stmt = $conexao->prepare("UPDATE chave SET situacao = 1 WHERE idChave = :id_chave");
        //             $stmt->bindParam('id_chave', $this->idChave);
        // }else{
        //     //echo 'Chave ainda disponivel';
        // }
    }

    // function getAgendar(){
    //     $banco = new Banco();
    //     $conexao = $banco->conectar();
        
    //     try{

    //             $stmt = $conexao->prepare("select data_agendar from agendar where idChave = 100");
    
    //             $stmt->execute();
            
    //             echo "Chave agendada";

    //     } catch(PDOException $ex){
    //         echo "Erro ao excluir predio: " . $ex;
    //     }
    // }
}
>>>>>>> 8dc0174c1dd9a6a4a6c526ff1f93b40a4e571631
