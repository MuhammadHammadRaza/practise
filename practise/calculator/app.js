var resultInside = "";
var bool, doubleHandler;

function getNumbers(num) {
    var result = document.getElementById("outputBar");
    var sign = document.getElementById("outputSignBar");
    parseFloat(resultInside);

    if (resultInside == "") {
        sign.value = "";
        result.value = "";
    }

    if (num != "*" && num != "/" && num != "+" && num != "-") {
        doubleHandler = true;
    }

    if (bool && doubleHandler) {
        result.value = "";
    }

    if (num != "*" && num != "/" && num != "+" && num != "-") {
        result.value += num;
        bool = false;
    }

    if (num == 0 && result.value == 0 ) {
        result.value = "";
    }

    doubleHandler = false;

    if (!bool) {
        resultInside += num;
    }

    if (num == "-") {
        sign.value = "-";
        bool = true;

    }
    if (num == "/") {
        sign.value = "÷";
        bool = true;
    }
    if (num == "*") {
        sign.value = "x";
        bool = true;
    }
    if (num == "+") {
        sign.value = "+";
        bool = true;
    }
}
function btnClear() {
    var result = document.getElementById("outputBar");
    var sign = document.getElementById("outputSignBar");
    sign.value = "";
    result.value = "";
    resultInside = "";
}
function getResult() {
    var sign = document.getElementById("outputSignBar");
    var result = document.getElementById("outputBar");
    result.value = eval(resultInside);
    if (sign.value == "=" || resultInside == "") {
        result.value = "SYNTAX ERROR"
    }
    resultInside = "";
    sign.value = "=";
}