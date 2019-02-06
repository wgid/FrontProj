<?php 
include "config.php";

$result = $pdo->query("SELECT * FROM `sound`");
while ( $row = $result->fetch(PDO::FETCH_ASSOC) ) {
   echo $row['title'] . '<br><br>';
}
// $sql = 'SELECT text FROM sound WHERE image = :image';

// $stmt = $pdo->prepare($sql);

// $params = [':image' => 'lost.jpg'];
// $stmt->execute($params);

// $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

// echo '<pre>';
// var_dump($rows);

$sql_pos = 'SELECT title FROM sound WHERE image = ?';

$stmt_pos = $pdo->prepare($sql_pos);

$stmt_pos->execute( ['lost.jpg'] );

$rows_pos= $stmt_pos->fetchAll(PDO::FETCH_ASSOC);

echo '<pre>';
var_dump($rows_pos);


#XSS

$useer_input = '<script> some magic here </script>';
$safe_input = htmlentities($useer_input);

echo $safe_input;
?>