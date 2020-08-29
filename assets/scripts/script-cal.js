let resul = document.getElementById('resul')
function operacion(op){
    let n1=parseInt(document.getElementById('number1').value)
    let n2=parseInt(document.getElementById('number2').value)
    switch(op){
        case "suma":
            resul.innerText=n1+n2;
            break;
        case "resta":
            resul.innerText=n1-n2;
            break;
        case "multi":
            resul.innerText=n1*n2;
            break;
        case "divi":
            resul.innerText=n1/n2;
            break;
        default:
           
    }
}