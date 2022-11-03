<?php
function registrarUSO($idChave, $data){
    //$dataEntrega = $this->Data;
    $banco = new Banco();
    $conexao = $banco->conectar();
    //$dtEntrega=date("Y-m-d",strtotime($dataEntrega));

    $hoje = date('Y-m-d');
    try{
      //  if('2022/11/06' == '2022/11/01'){
            $stmt = $conexao->prepare("UPDATE chave SET situacao = 1 WHERE idChave = :id_chave");
            $stmt->bindParam('id_chave', $idChave);

            $stmt->execute();

            echo "Chave agendada";
     //   }

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
?>