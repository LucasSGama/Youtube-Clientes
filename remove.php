<?php
    header('Access-Control-Allow-Origin: *');
    require_once('config.php');
    
    $id = isset($_POST['id']) ? $_POST['id'] : null;

    if(empty($id)) {
        echo json_encode(["message"=>"Não foi passado nenhum id"]);
    } else {
        $sql="DELETE FROM clientes WHERE id='$id'";

        $response = $connection->query($sql);

        if($response === TRUE) {
            echo json_encode(["message"=>"Usuário deletado com sucesso"]);
        }else{
            echo json_encode(["message"=>"Erro ao excluir usuário"]);
        }
    }
?>