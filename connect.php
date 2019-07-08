<html>
    <head>
    
    </head>
    
    <body>
        <?php
            // mysqli (object oriented, procendural, mysql only)
            // PDO ()
        
            //echo '<h1> PHP com MySQL </h1>';
            // mysqli
            $servidor = 'localhost';
            $usuario = 'root';
            $senha = '';
            $bd = 'tabela_periodica';
            
            // Abrindo a conexão
            $conn = mysqli_connect($servidor, $usuario, $senha, $bd);
            
            // Testando a conexão
            if($conn){
                //echo '<p> Conexão feita com sucesso </p>';
            }else{
                die('Conexão não realizada' . mysqli_connect_error());
            }
        
            // Fechando a conexão
            //mysqli_close($conn);
        ?>
    
    </body>

</html>