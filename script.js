let display = document.querySelector("#display");


function appendToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = console.log("error");
    }
}