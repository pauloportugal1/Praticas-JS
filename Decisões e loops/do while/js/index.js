let multiplos = 0;
let msg = "";

do{
    multiplos++;
    msg += multiplos + " x 5 = " + (multiplos*5) + "<br/>";

}while(multiplos < 10);

document.querySelector("#answer").innerHTML = msg;