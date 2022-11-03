<?php
    

    //$dataUser = '2022/11/02';
    
    $hoje = date('Y-m-d');
    
    $date = date('d-m-Y', strtotime($hoje));

    echo $hoje;

// function agendar_chave($idChave){

//     $dataUser = '2022/11/02';
//     $hoje = date('Y/m/d');

//     if($hoje == $dataUser){
//         //echo 'Chave indisponivel';
//         $stmt = $conexao->prepare("UPDATE chave SET situacao = 1 WHERE idChave = :id_chave");
//                 $stmt->bindParam('id_chave', $idChave);
//                 $stmt->execute();
//     }else{
//         echo 'Chave ainda disponivel';
//     }
// }

// function retirar_chave($idChave){
//     $agora = date('H:i:s');

//     echo $agora . '<br>';
//     $data = date('H:i:s', strtotime('05:35:00', strtotime($agora)));
//     echo $data;
// }

//retirar_chave();
    
?>