
<?php

include_once '../Conexao.php';
include_once 'funcaoRefresh.php';

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
        
        $id_chave = $this->idChave;
        $dataI = $this->Data;
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
            echo "Chave agendada";
            

        } catch(PDOException $ex){
            echo "Erro ao excluir predio: " . $ex;
        }
    }
    
    //registrarUSO($id_chave, $dataI);

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


    function getAgendada(){
        $banco = new Banco();
        $conexao = $banco->conectar();
        try{
            $stmt = $conexao->prepare("select chave.idChave, chave.situacao,
            CASE WHEN agendar.data_agendar = date(now()) THEN 'sim'
            ELSE 'nao' end as agendado, chave.idPredio, chave.descricao, agendar.turno, agendar.id_cliente, agendar.data_agendar from chave left join agendar on (chave.idChave = agendar.idChave)");

            
            $agendadas = array();
            foreach($stmt->fetchAll() as $v => $value){
                $chaves = new Agendadas(
                    $value['idChave'],
                    $value['situacao'],
                    $value['idPredio'],
                    $value['agendado']
                    $value['descricao']);
                array_push($agendadas, $chaves);
            }

            return $a;

        }catch(PDOException $ex){
            echo $ex;
        }
        
    }
    
}

?>
