var paragraph = document.querySelector(".typeAnimation")
var text = paragraph.innerHTML
var index = 0

export function typing(){
    
    paragraph.innerHTML = paragraph.innerHTML.replace("|","")

    if(text.length > index){
        if(index === 0){
            paragraph.innerHTML = text.charAt(index)
        }else {
            paragraph.innerHTML += text.charAt(index)
        }

        paragraph.innerHTML += "|"

        index++
        setTimeout(typing, 50)
    }
}