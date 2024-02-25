<?php
    require_once('config.php');

    $name = $_POST['name'];
    $cpf = $_POST['cpf'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $sql = "INSERT INTO clientes(name, cpf, address, telephone, email VALUE('".$name."','".$cpf."','".$address."','".$phone."','".$email."')"

    $result = $connection->query($sql);

    if(!$result) {
        http_response_code(500);
        echo json_encode(["error" => "Erro ao inserir no banco de dados"]);
    } else {
        http_response_code(200);
        echo json_encode(["sucess" => "Salvo no banco de dados"])
    }

?>