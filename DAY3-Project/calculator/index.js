// calculator program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value +=input;
}


function clearDisplay(){
    display.value ="";
}
function calculate(){
    try{
display.value =eval(display.value)
}
catch(err){
    display.value="ERROR"
}
}
function erase(){
    display.value = display.value.slice(0, -1)
}