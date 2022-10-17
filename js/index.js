import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import { handleButtonPress, handleClear,  handleTyping } from "./keysHandlers.js"
import {typing} from "./typingEfct.js"

document.querySelectorAll(".charKey").forEach(function(charKeyBtn){
    charKeyBtn.addEventListener("click", handleButtonPress);
})

typing()

document.getElementById("clear").addEventListener("click", handleClear);
document.getElementById("displayOperation").addEventListener("keydown", handleTyping);
document.getElementById("equal").addEventListener("click", calculate);
document.getElementById("copyClipboard").addEventListener("click", copyToClipboard);