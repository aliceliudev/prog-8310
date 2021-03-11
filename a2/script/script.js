let temp_f;
const exitNumber = 999;
while(parseFloat(temp_f) != parseFloat (exitNumber))
{
 temp_f = prompt("Enter a temperature in Fahrenheit. Or enter '999' to exit the application!");

 if (parseFloat(temp_f) == parseFloat(exitNumber))
    {  
      alert("You have entered '" + temp_f + "'. The application will be ended.");
    } 

 else if (parseFloat(temp_f) == null || isNaN(parseFloat(temp_f))) 
    {
        alert("'" + temp_f + "' is illegal. You must input a number!");
     }

 else if (parseFloat(temp_f) < -100 || parseFloat(temp_f) > 212)
     {
        alert("You have entered '" + temp_f + "'. Entry must range between -100 to +212.");
        
     }
 else 
     {
         const temp_c = (parseFloat(temp_f) - 32) * 5/9;
         alert("Fahrenheit temperature is " + parseFloat(temp_f));
         alert(`Celsius temperature is ${temp_c}.`);
         break;
     }
}

