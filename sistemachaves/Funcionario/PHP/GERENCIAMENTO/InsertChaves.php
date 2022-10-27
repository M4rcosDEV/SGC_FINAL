<?php

    include_once '../Conexao.php';
    
    class Chave{
        public $idPredio;
        public $idChave;
        public $Situacao;
        public $Descricao;

        function __construct($idChave, $Situacao, $idPredio, $Descricao){
            $this -> idChave = $idChave;
            $this -> Situacao = $Situacao;
            $this -> idPredio = $idPredio;
            $this -> Descricao = $Descricao;
        }

        function inserirChave(){
            $banco = new Banco();
            $conexao = $banco->conectar();
            try{
                $stmt = $conexao->prepare("INSERT INTO chave (idChave, Situacao, idPredio, Descricao)VALUES (:idChave, :Situacao, :idPredio, :Descricao)");
                $stmt -> bindParam(':idChave', $this->idChave);
                $stmt -> bindParam(':Situacao', $this->Situacao);
                $stmt -> bindParam(':idPredio', $this->idPredio);
                $stmt -> bindParam(':Descricao', $this->Descricao);
                $stmt -> execute();
            } catch (PDOException $e){
                echo 'erro ao enserir chave ' . $e;
            }
        }
        function inserirSala(){
            $banco = new Banco();
            $conexao = $banco->conectar();
            try{
                $stmt = $conexao->prepare("INSERT INTO sala VALUES (:idChave, :idPredio)");
                $stmt -> bindParam(':idChave', $this->idChave);
                $stmt -> bindParam(':idPredio', $this->idPredio);
                $stmt -> execute();
            } catch (PDOException $e){
                echo 'erro ao enserir chave ' . $e;
            }
        }

    }