import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";

const displayOperation = document.getElementById("displayOperation");
const resultDisplay = document.getElementById("resultDisplay");

export function handleButtonPress(ev){
        const value = ev.currentTarget.dataset.value
        displayOperation.value += value
}

export function handleClear(ev){
    displayOperation.value = ""
    displayOperation.focus()
    resultDisplay.value = ""
}

export function handleTyping(ev){
    ev.preventDefault()
    const allowedKeys = ["(",")","/","*","-","+",".","%","9","8","7","6","5","4","3","2","1","0"," "];
    if(allowedKeys.includes(ev.key)){
        displayOperation.value += ev.key
        return
    }if(ev.key === "Backspace"){
        displayOperation.value = displayOperation.value.slice(0,-1)
    }
    if(ev.key === "Enter"){
        calculate
    }
}