let score = 50;
let pass = 60;
let msg = "";

if(score >= pass){
    msg += "Congratulations!, you passed!";
}else{
    msg += "Have another go!";
}

let el = document.querySelector("#answer");
el.innerHTML = msg;

