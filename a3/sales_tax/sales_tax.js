/*var $ = function (id) {
    return document.getElementById(id); 
}; */

var processEntries = function(){
    const subtotal_value = document.getElementById("subtotal").value;
    const tax_rate_value = document.getElementById("tax_rate").value;
    if (isNaN(subtotal_value) || isNaN(tax_rate_value)){
        alert('Entries must be a number!');
    }
    else if(subtotal_value < 0 || subtotal_value > 10000){
        alert('Subtotal must be positive and less than 10000');

    }
    else if(tax_rate_value < 0 || tax_rate_value >=12){
        alert('Tax rate must be positive and less than 12.');
    }
    else{
        const subtotal = parseFloat(subtotal_value);
        const tax_rate = parseFloat(tax_rate_value);
        const sales_tax = (subtotal * (tax_rate/100));
       // const total = parseFloat(subtotal) + parseFloat(salesTax);
        const total = subtotal + sales_tax;
        document.getElementById("sales_tax").value = sales_tax.toFixed(2);
        document.getElementById("total").value = total.toFixed(2);
        console.log("Process entries");
    }

}



var clearEntries = function(){
    document.getElementById("subtotal").value = "";
    document.getElementById("tax_rate").value = "";
    document.getElementById("sales_tax").value = "";
    document.getElementById("total").value = "";
}

window.onload = function(){
    // processEntries.onclick = processEntries;
    document.getElementById("subtotal").focus();
    const _calculateButton = document.getElementById("calculate");
    const _clearButton = document.getElementById("clear");
    _calculateButton.onclick = processEntries;
    _clearButton.onclick = clearEntries;
 
    
 }
/*windows.onload = function(){
    const _clearButton = document.getElementById("clear");
    _clearButton.onclick = cl
}
*/



