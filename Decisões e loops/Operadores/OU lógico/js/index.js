let score1 = 50;
let score2 = 70;
let pass = 70;

let minPass = ((score1 >= pass) || (score2 >= pass));
let msg = "Resit required: " + !(minPass);

let el = document.querySelector('#answer');
el.textContent = msg;
