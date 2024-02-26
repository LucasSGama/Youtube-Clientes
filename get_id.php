<?php
    header('Access-Control-Allow-Origin: *');
    require_once('config.php');

    $id = isset($_POST['id']) ? $_POST['id'] : null;

    if(empty($id)){
        echo json_encode(["message"=>"Sem id valido"]);
    }else{
        $sql = "SELECT * FROM clientes WHERE id = '$id'";

        $response = $connection->query($sql);
        $rows = array();

        if($response->num_rows > 0) {
            foreach($response as $r) {
                $rows[] = $r;
            }

            echo json_encode($rows);
        }else {
            echo json_encode(["message"=>"Não possui usuario com esse id"]);
        }

    }
?>