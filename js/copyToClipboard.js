export default function copyToClipboard (ev){
    const button = ev.currentTarget
    if(button.innerText === "copy"){
        button.innerText = "copied!"
        button.classList.add("success")
        navigator.clipboard.writeText(resultDisplay.value)
    } else{
        button.innerText = "copy"
        button.classList.remove("success")
    }
}