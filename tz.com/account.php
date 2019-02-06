<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="main.js"></script>
    <script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>
<div class="account_info">
        <h2>Авторизация прошла успешно</h2>
      <h3>Ваш Логин: <span><?php echo $_POST['first_name_or_email']?></span> </h3> 
      <h3>Ваш пароль: <span><?php echo $_POST['user_pwd']?></span> </h3> 
</div>
</body>
</html>