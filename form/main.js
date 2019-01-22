$(document).ready(function () {

    $("#username_error_mesage").hide();
    $("#last_name_error_mesage").hide();
    $("#email_error_mesage").hide();
    $("#password_error_mesage").hide();
    $("#password_again__error_mesage").hide();

    var error_username = false;
    var error_last_name = false;
    var error_email = false;
    var error_password = false;
    var error_password_again = false;

    // Проверка имени
    $("#first_name").focusout(function () { 
        check_name();
    });

    // Проверка фамилии
    $("#last_name").focusout(function () {
        check_last_name();
    });

     // Проверка Email
    $("#email").focusout(function () {
        check_email();
    });

     // Проверка пароля
    $("#password").focusout(function () {
        check_password();
    });
    $("#password_again").focusout(function () {
        check_password_again();
    });

    function check_name() {
        var name_length = $("#first_name").val().length;   
        if(name_length == 0){
            $("#username_error_mesage").html("Пожалуйста, укажите имя");
            $("#first_name").css('border', '1px solid red');
            $("#username_error_mesage").show();
            error_username = true; 
        }
        else{
            $("#username_error_mesage").hide();
            $("#first_name").css('border', '1px solid gray');
        }
    }
    
    function check_last_name() {
        var last_name_length = $("#last_name").val().length;  
        if(last_name_length == 0){
            $("#last_name_error_mesage").html("Пожалуйста, укажите фамилию.");
            $("#last_name").css('border', '1px solid red');
            $("#last_name_error_mesage").show();
            error_last_name = true;
        }
        else{
            $("#last_name_error_mesage").hide();
            $("#last_name").css('border', '1px solid gray');
        }
    }

    function check_email() {
        var regEmail = new RegExp(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i);
        if(regEmail.test($("#email").val())){
            $("#email_error_mesage").hide();
            $("#email").css('border', '1px solid gray');      
        }
        else{
            $("#email_error_mesage").html("Пожалуйста, исправьте ошибку в эл. почте.");
            $("#email").css('border', '1px solid red');
            $("#email_error_mesage").show();
            error_email = true;
        }
    }
    
    function check_password() {
      var password = $("#password").val().length;
        if(password == 0 || password < 6 ){
            $("#password_error_mesage").html("Пожалуйста, введите пароль не меньше 6 символов.");
            $("#password").css('border', '1px solid red');
            $("#password_error_mesage").show();
            error_password = true;
        }
        else{
            $("#password_error_mesage").hide();
            $("#password").css('border', '1px solid gray');         
        }
    }

    function check_password_again() {
        password = $("#password").val();
        var password_again = $("#password_again").val(); 
        if(password_again == password){
            $("#password_again_error_mesage").hide();
            $("#password_again").css('border', '1px solid gray');       
        }
        else{
            $("#password_again_error_mesage").html("Пароли не совпадают");
            $("#password_again").css('border', '1px solid red');
            $("#password_again_error_mesage").show();
            error_password_again = true;
        }
    }

    $("#reg_form").submit(function () {
        error_username = false;
        error_last_name = false;
        error_email = false;
        error_password = false;
        error_password_again = false;

        check_name();
        check_last_name();
        check_email();
        check_password_again();
        check_password();
        

        if (error_username == false && error_last_name == false && error_email == false && 
            error_password == false && error_password_again == false) {   
            return true;
        }else{  
            return false;
        }
        
    });
});
