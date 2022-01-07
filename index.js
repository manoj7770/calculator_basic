var result = document.getElementById("output"); 
function clearScreen(){
    result.value = "";
}

function addToDisplay(value){
    result.value = result.value + value;
}

function calculate(){
    var finalValue = result.value;
    var output = eval(finalValue);
    result.value = output;
}

