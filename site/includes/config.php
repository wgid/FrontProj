<?php 
$host = '127.0.0.1';
$db   = 'test_blog';
$user = 'root';
$pass = 'uJUKcvaRCtWMGdVP';
$charset = 'utf8';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
try {
    $pdo = new PDO($dsn, $user, $pass, $opt);
} catch (PDOException $e) {
    die("Не могу подключиться к БД");
}




?>