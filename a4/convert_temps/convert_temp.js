"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};
var convertTemp = function() {
    let temp_f;
    let temp_c;
    let f = $("degrees_entered").value;
  //Validate first
  if(isNaN(f) == true || f.length == 0){
     return alert('You must enter a valid number of degrees!');
   }
  else {

    if ($("to_celsius").checked) {
        temp_f = parseFloat(f);
        temp_c = (temp_f - 32) * 5/9;

        $("degrees_computed").value =  Math.round(temp_c);
    }
  else if ($("to_fahrenheit").checked)
  
   {       temp_c = parseFloat(f);
          temp_f = temp_c* (9/5) + 32;
          $("degrees_computed").value = Math.round(temp_f); 
   }
 }
}

var toCelsius = function() {

    $("degree_label_1").innerHTML = "Enter F Degress";
    $("degree_label_2").innerHTML = "Degrees Celsius";
    
    clearTextBoxes();
}

var toFahrenheit = function() {
    $("degree_label_1").innerHTML = "Enter C Degress";
    $("degree_label_2").innerHTML = "Degrees Fahrenheit";
    clearTextBoxes();
}



window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};