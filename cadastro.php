<?php

header('Access-Control-Allow-Origin: *');

    require_once('config.php');
    session_start();

    $name = isset($_POST['name']) ? $_POST['name'] : null;
    $cpf = isset($_POST['cpf']) ? $_POST['cpf'] : null;
    $address = isset($_POST['address']) ? $_POST['address'] : null;
    $tel = isset($_POST['telephone']) ? $_POST['telephone'] : null;
    $email = isset($_POST['email']) ? $_POST['email'] : null;

    if(empty($name) || empty($cpf) || empty($address) || empty($tel) || empty($email)) {
        echo json_encode(["message" => "Todos os campos precisam ser preenchidos!"]);
    } else {
        
        $str = "SELECT * FROM clientes WHERE cpf='$cpf'";
        
        $response = $connection->query($str);
        
        if($response->num_rows > 0) {
            echo json_encode(["message"=>"CPF já está cadastrado"]);
        } else {
            
            $sql = "INSERT INTO clientes(name, cpf, address, telephone, email) VALUES('".$name."','".$cpf."','".$address."','".$tel."','".$email."')";
            
        $result = $connection->query($sql);
        // echo json_encode(["message"=>"Usuário Cadastrado"]);
        
        if(!$result) {
            http_response_code(500);
            echo json_encode(["error" => "Erro ao inserir no banco de dados"]);
        } else {
            // http_response_code(200);
            // echo json_encode(["success" => "Salvo no banco de dados"]);
                    echo json_encode(["message"=>"Usuário Cadastrado"]);
        }
    }
}
    ?>