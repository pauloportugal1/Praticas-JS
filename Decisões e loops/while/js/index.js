let multiplos = 0;
let msg = "";
while(multiplos < 10){
    multiplos++;
    msg += multiplos + " x 5 = " + (multiplos * 5) + "<br/>";
    
}

document.querySelector("#answer").innerHTML = msg;