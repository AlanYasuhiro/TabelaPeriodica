
<?php
    $element = [];
    $sort = rand(1,118);
//            echo $sort;
    include "connect.php";
    $sql = 'select * from elementos where AtomicNumber = ' . $sort;
    $resultado = mysqli_query($conn,$sql);
    $campos = mysqli_fetch_fields($resultado);
    if(mysqli_num_rows($resultado) > 0){
        while($linha = mysqli_fetch_assoc($resultado)){
            $elemento = $linha['Element'] . " " . $linha['AtomicNumber'] . " " . $linha['Symbol'] . " " . $linha['AtomicMass'] . " " . $linha['Phase'] . " " . $linha['Metal'];
            echo $elemento;

        }
    }
?>
