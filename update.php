<?php
    header('Access-Control-Allow-Origin: *');
    require_once('config.php');

    $id = isset($_POST['id']) ? $_POST['id'] : null;
    $name = isset($_POST['name']) ? $_POST['name'] : null;
    $cpf = isset($_POST['cpf']) ? $_POST['cpf'] : null;
    $address = isset($_POST['address']) ? $_POST['address'] : null;
    $tel = isset($_POST['telephone']) ? $_POST['telephone'] : null;
    $email = isset($_POST['email']) ? $_POST['email'] : null;

    if(empty($name) || empty($cpf) || empty($address) || empty($tel) || empty($email)){
        echo json_encode(["message"=>"Todos os campos precisam ser preenchidos"]);
    }else{
        $sql = "UPDATE clientes SET name='$name', cpf='$cpf', address='$address', telephone='$tel', email='$email'
        WHERE id='$id'";

        $response = $connection->query($sql);

        if($response === TRUE) {
            echo json_encode(["message"=>"Usuário atualizado com sucesso"]);
        }else {
            echo json_encode(["message"=>"Erro ao atualizar o usuário"]);
        }
    }
?>