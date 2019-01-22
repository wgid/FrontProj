<?php

$connection = mysqli_connect('127.0.0.1', 'root', 'uJUKcvaRCtWMGdVP', 'user_account'); 
if ($connection == false) {
    echo "не удалось подключиться";
    echo mysqli_connect_error();
    exit();
}
$check_name = 'username_error_mesage';
$result = mysqli_query($connection, "SELECT * FROM `users` ");
// $result = mysqli_query($connection, "SELECT * FROM `users` ");

// while( ($record = mysqli_fetch_assoc($result)) ) {
//     print_r($record);
// }

// mysqli_close($connection);
?>