<?php 

include_once 'banco.php';

class Update { 
    $idChave; 
    $nome_cliente;
    $data_agendamento;

    function __construct($idChave, $nome_cliente, $data_agendamento){
        $this->idChave = $idChave;
        $this->nome_cliente = $nome_cliente;
        $this->data_agendamento = new DateTime($data_agendamento);
    }
    function atualizarAgendamento() {
        $banco = new Banco();
        $conexao = $banco->conectar();
        try { 
            
        }
    }
}