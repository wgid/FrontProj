
function dateZodiacSign() {
    var fulldate = new Date(document.querySelector('input[type="date"]').value); 
    var date = new Date("0" + (fulldate.getMonth() + 1) + "/" + fulldate.getDate() + "/" + fulldate.getFullYear());
    var year = fulldate.getFullYear();
    var signs = {
        "Овен":     [new Date(year + "/03/21"), new Date(year + "/04/20")],
        "Телец":    [new Date(year + "/04/21"), new Date(year + "/05/20")],
        "Близнецы": [new Date(year + "/05/21"), new Date(year + "/06/21")],
        "Рак":      [new Date(year + "/06/22"), new Date(year + "/07/22")],
        "Лев":      [new Date(year + "/07/23"), new Date(year + "/08/23")],
        "Дева":     [new Date(year + "/08/24"), new Date(year + "/09/23")],
        "Весы":     [new Date(year + "/09/24"), new Date(year + "/10/23")],
        "Скорпион": [new Date(year + "/10/24"), new Date(year + "/11/22")],
        "Стрелец":  [new Date(year + "/11/23"), new Date(year + "/12/21")],
        "Козерог":  [new Date(year - 1 + "/12/22"), new Date(year + "/01/20")],
        "Водолей":  [new Date(year + "/01/21"), new Date(year + "/02/20")],
        "Рыбы":     [new Date(year + "/02/21"), new Date(year + "/03/20")]
    };
    checkDay(date);
    function checkDay(date) {
        for (var key in signs) {
            let start_sign = signs[key][0];
            let end_sign = signs[key][1];
            if (date >= start_sign && date <= end_sign) {
                document.getElementById("sign_name").innerHTML = "Ваш знак: " + key;
            }
        }
    }
}
