let date = new Date();
let timeElapsed = null;
let timeLimit = 250;
let inicio = 0;
let end = 0;
let doble = false;

document.getElementById("click-me").onclick = function() {checkClick()};

function checkClick(element){
    var msg = document.getElementById('resultado');
    msg.innerHTML = "";
    if (inicio) {
        end = date.getTime();
        timeElapsed = end - inicio;
        if (timeElapsed < timeLimit) {
            doble = true;
        }else{
            doble = false;
        }
        setTimeout(function () {
            inicio = null;
            end = null;
            if (doble) {
                msg.innerHTML = "Click";
                doble = false;
            }
        },timeLimit);                
    }else{
        inicio = date.getTime();
        setTimeout(function () {
            inicio = null;
            end = null;
            if (!doble) {
                msg.innerHTML = "Doble Click";
            }
            
        },timeLimit);
    }
}