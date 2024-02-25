<?php
    $host="localhost";
    $user="root";
    $password="";
    $dbname="youtube";

    $connection = new mysqli($host, $user, $password, $dbname);

    if($connection->connect_erro) {
        die("Connection Failed".$connection->connect_erro);
    }
?>