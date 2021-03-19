let _operators;
let _numbers;
let _display;
let isOperator = false;
let _clear;
let _backspace;
let _clearAll;
let _percent;
let _log;
let _exponent;

let _sqrt;
let _negate;

//onload to feach buttons

window.onload = function() {
    _operators = document.querySelectorAll('.button-op');   //Store all the operators in variable
    _numbers = document.querySelectorAll('.button-num');
    _display = document.querySelector('#output');
    // _display.value = eval("1+1");
    _eval = document.querySelector('#eval');

    _clear = document.querySelector('#clear');

    _backspace = document.querySelector('#back');

    _clearAll = document.querySelector('#clearAll');

    _percent = document.querySelector('#percent');

    _log = document.querySelector('#log');

    _exponent = document.querySelector('#exponent');

    _sqrt = document.querySelector('#sqrt');

    _negate = document.querySelector('#negate');

    _operators.forEach(function(_operator) {
        //console.log(_operator);
        _operator.onclick = operatorClick;
    });


    _numbers.forEach(function(_number) {

        _number.onclick = numberClick;

    });

    _eval.onclick = evaluateClick;
    _clear.onclick = clearClick;

    _clearAll.onclick = clearClick;

    _backspace.onclick = backClick;

    _percent.onclick = percentClick;

    _log.onclick = logClick;
    _exponent.onclick = exponentClick;
    _sqrt.onclick = sqrtClick;

    _negate.onclick = negateClick;


};

// function for operators
var operatorClick = function(event) {
    //console.log(event.target.getAttribute('data-num'));

    const operator = event.target.getAttribute('data-op');

    if (!isOperator) {
        _display.value += operator;
    }
    isOperator = true;
};
// function for numbers
var numberClick = function(event) {
    //console.log(event.target.getAttribute('data-op'));
    _display.value += event.target.getAttribute('data-num');
    isOperator = false;
};

// function for buttons
var opButton = function(event) {
    if (isOperator) return;
    else {
        _display.value += event.target.getAttribute('data-op');
    }

};

// function for eval
var evaluateClick = function() {

    if ((_display.value).indexOf("^") > -1) {
        var base = (_display.value).slice(0, (_display.value).indexOf("^"));
        var exponent = (_display.value).slice((_display.value).indexOf("^") + 1);
        _display.value = eval("Math.pow(" + base + "," + exponent + ")");

    } else {
        _display.value = eval(_display.value);
    }
};


/*
var evaluateClick = function() {
const evalstring = 

_display.value = eval(_display.value);

}


*/








//function for clear button
var clearClick = function() {
    _display.value = "";
};


var backClick = function() {
    _display.value = _display.value.substring(0, _display.value.length - 1);
    isOperator = false;

};

var percentClick = function() {


    _display.value = _display.value / 100;

    isOperator = false;

};


var logClick = function() {
    _display.value = Math.log10(_display.value);
};


var exponentClick = function() {
    _display.value += "^";
};

var sqrtClick = function() {
    _display.value = Math.sqrt(_display.value);
};


var negateClick = function() {
    if (_display.value.charAt(0) === "-") {
        _display.value = _display.value.slice(1);
    } else {
        _display.value = "-" + _display.value;
    }
};


/*var exponentClick1 = function() {
    if ((display.value).indexOf("^") > -1) {
        var base = (display.value).slice(0, (display.value).indexOf("^"));
        var exponent = (display.value).slice((display.value).indexOf("^") + 1);
        display.value = eval("Math.pow(" + base + "," + exponent + ")");
    }


}; */

//function deleteChar(input) {
 //   _display.value = _display.value.substring(0, _display.value.length - 1);
//}