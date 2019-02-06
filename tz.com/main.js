$(document).ready(function () {
    $("#error_login_or_email_message").hide();
    $("#error_password_message").hide();

    var error_login = false;
    var error_password = false;

    // Проверка поля Логин или Email
    $("#first_name_or_email").focusout(function () {
        check_name_or_email();
    });
    // Проверка поля password
    $("#password").focusout(function () {
        check_password();
    });

    function check_name_or_email() {
        var login_length = $("#first_name_or_email").val().length;
        var login_val = $("#first_name_or_email").val();
        if (login_length == 0) {
            error_login = true;
            $("#error_login_or_email_message").html("Пожалуйста, укажите имя или Email");
            $("#first_name_or_email").css('border', '1px solid red');
            $("#error_login_or_email_message").show();
        }else if(login_val.indexOf('@')+ 1){
            check_email();
        }
        else {
            $("#error_login_or_email_message").hide();
            $("#first_name_or_email").css('border', '1px solid gray');
        }
    }
    function check_password() {
        var password = $("#password").val().length;
        if (password == 0 || password < 6) {
            $("#error_password_message").html("Пожалуйста, введите пароль не меньше 6 символов.");
            $("#password").css('border', '1px solid red');
            $("#error_password_message").show();
            error_password = true;
        }
        else {
            $("#error_password_message").hide();
            $("#password").css('border', '1px solid gray');
        }
    }

    function check_email() {
        var regEmail = new RegExp(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i);
        if(regEmail.test($("#first_name_or_email").val())){
            $("#error_login_or_email_message").hide();
            $("#first_name_or_email").css('border', '1px solid gray');      
        }
        else{
            $("#error_login_or_email_message").html("Пожалуйста, исправьте ошибку в эл. почте.");
            $("#first_name_or_email").css('border', '1px solid red');
            $("#error_login_or_email_message").show();
            error_email = true;
        }
    }

    $("#login_form").submit(function () {
        error_login = false;
        error_password = false;

        check_name_or_email();
        check_password();
        
        if (error_login == false && error_password == false) {
            return true;
        }else{
            return false;
            
        }

    });
});