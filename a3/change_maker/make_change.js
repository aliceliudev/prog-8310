var $ = function(id) {
    return document.getElementById(id);
};

var makeChange = function(cents){
    let quarters, dimes, nickels, pennies;
    //quarter

    if (cents > 25){

        quarters = Math.floor(cents/25);
        cents = cents - (quarters *25)
    document.getElementById("quarters").value = quarters;
    
        }
        
     else {
        document.getElementById("quarters").value = 0;
     }   
    //




        if (cents > 9){
        
        dimes = Math.floor(cents/10);
        
        cents=Math.floor(cents%10);
        document.getElementById("dimes").value = dimes;
        
        }else{
            document.getElementById("dimes").value = 0;
        }
        
        if (cents > 4){
        
        nickels = Math.floor(cents/5);
        cents=Math.floor(cents%5);
        document.getElementById("nickels").value = nickels;
        } else {
            document.getElementById("nickels").value = 0;
        }
        
        if (cents > 0) {
        
        pennies = Math.floor(cents/1);
        document.getElementById("pennies").value = pennies;
        
        }
}




var processEntry = function() {
    const entry  = document.getElementById("cents").value;
    if(isNaN(entry)) {
        alert('Entry must be a number');
    }
    else if (entry < 0 || entry >99){
        alert('Entry must be between 0 and 99');
    }
    else {
        makeChange(entry);
       
    }

}


window.onload = function() {
    //document.getElementById("calculate").onclick = processEntry;
    document.getElementById("calculate").onclick = processEntry;
}

