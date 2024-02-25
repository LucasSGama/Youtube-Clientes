<?php
header('Access-Control-Allow-Origin: *');

    $host="localhost";
    $user="root";
    $password="";
    $dbname="youtube";

    $connection = new mysqli($host, $user, $password, $dbname);

    if($connection->connect_error) {
        die("Connection Failed".$connection->connect_error);
    }
?>