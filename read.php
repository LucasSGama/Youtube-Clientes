<?php
    header('Access-Control-Allow-Origin: *');
    require_once('config.php');
    $sql = "SELECT * FROM clientes ORDER BY id ASC";

    $resultado = $connection->query($sql);

    if($resultado->num_rows > 0) {
        foreach($resultado as $row) {
            echo "<tr>";
                echo "<td>".$row["name"]."</td>";
                echo "<td>".$row["cpf"]."</td>";
                echo "<td>".$row["address"]."</td>";
                echo "<td>".$row["telephone"]."</td>";
                echo "<td>".$row["email"]."</td>";
                echo "<td>
                    <button type='button' class='btn btn-success'>Editar</button>
                    <button type='button' class='btn btn-danger'>Excluir</button>
                </td>";
            echo "</tr>";
        }
    } else {
        echo "";
    }

?>