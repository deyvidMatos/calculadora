export default function calculate(){
    const resultDisplay = document.getElementById("resultDisplay")
    const displayOperation = document.getElementById("displayOperation")
    resultDisplay.value = "ERROR!"
    resultDisplay.classList.add("error")
    const result = eval(displayOperation.value)
    resultDisplay.value = result
    resultDisplay.classList.remove("error")
}