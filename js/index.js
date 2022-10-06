const allowedKeys = ["(",")","/","*","-","+",".","%","9","8","7","6","5","4","3","2","1","0"," "]
const displayOperation = document.getElementById("displayOperation")
const resultDisplay = document.getElementById("resultDisplay")

document.querySelectorAll(".charKey").forEach(function(charKeyBtn){
    charKeyBtn.addEventListener("click", function(){
        const value = charKeyBtn.dataset.value
        displayOperation.value += value
    })
})

document.getElementById("clear").addEventListener("click", function(){
    displayOperation.value = ""
    displayOperation.focus()
    resultDisplay.value = ""
    resultDisplay.classList.remove("error")
})

displayOperation.addEventListener("keydown", function(ev){
    ev.preventDefault()
    if(allowedKeys.includes(ev.key)){
        displayOperation.value += ev.key
        return
    }if(ev.key === "Backspace"){
        displayOperation.value = displayOperation.value.slice(0,-1)
    }
    if(ev.key === "Enter"){
        calculete()
    }
})

document.getElementById("equal").addEventListener("click", calculete)

function calculete(){
    resultDisplay.value = "ERROR!"
    resultDisplay.classList.add("error")
    const result = eval(displayOperation.value)
    resultDisplay.value = result
    resultDisplay.classList.remove("error")
}

document.getElementById("copyClipboard").addEventListener("click", function(ev){
    const button = ev.currentTarget
    if(button.innerText === "copy"){
        button.innerText = "copied!"
        button.classList.add("success")
        navigator.clipboard.writeText(resultDisplay.value)
    } else{
        button.innerText = "copy"
        button.classList.remove("success")
    }
})