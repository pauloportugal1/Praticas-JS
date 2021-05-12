let level = 4;
let msg = "";

switch (level){
    case 1: 
    msg += "Oh! Good luck on the first test";
    break;
    
    case 2:
    msg += "Second one, let's do this!";
    break;

    case 3:
    msg += "Third one, almost finishing!";
    break;

    default:
    msg += "Good luck!";
    break;
}

let el = document.querySelector('#answer');
el.textContent = msg;
