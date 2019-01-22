<?php include "include/config.php";?>
<?php 
    $result = mysqli_query($connection, "SELECT * FROM `users` ");
    while( ($user = mysqli_fetch_assoc($result)) ) {
        if ($_POST['first_name'] == $user['name']) {
            echo "жесть";
        }
    }
?>



<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="style12.css" />
    <script src="main.js"></script>
</head>

<body>
    <div class="main-content">
        <div class="exit">
            <span>ID:001</span>
            <a href="registration.php">Выход</a>
        </div>
        <div class="account-info">
            <div class="avatar">
                <img src="empty_avatar.png" width="100" height="100" alt="">
                <label for="uploadbtn" class="uploadButton">Загрузить файл</label>
                <input style="opacity: 0; z-index: -1;" type="file" name="upload" id="uploadbtn">
                <a href="#" class="delete_avatar">Удалить</a>
            </div>
            <div class="info">
              
  
                <table class="wall_table">
                    <tr>
                        <td>Ваше имя:</td>
                        <td><?php echo $_POST['first_name'];?></td>
                    </tr>
                    <tr>
                        <td>Ваша фамилия:</td>
                        <td><?php echo $_POST['last_name'];?></td>
                    </tr>
                    <tr>
                        <td>Ваш Email:</td>
                        <td><?php echo $_POST['user_mail'];?></td>
                        <td><a href="#">Подтвердить</a></td>
                    </tr>
                    <tr>
                        <td>Ваш пароль:</td>
                        <td><?php echo $_POST['user_pwd'];?></td>
                    </tr>
                    <tr class="confirm">
                        <td>Ваш телефон:</td>
                        <td >380974993317</td>
                        <td><a href="#">Подтвердить</a></td>
                    </tr>
                    <tr>
                        <td>Ваша страна:</td>
                        <td >Украина</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</body>

</html>