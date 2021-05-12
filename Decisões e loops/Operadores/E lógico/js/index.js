let score1 = 70;
let score2 = 80;
let bothPass;
let minScore = 70;

let elResult = document.querySelector('#answer');


if (score1 && score2 >= minScore) {
    bothPass = true;
    elResult.innerHTML = "<p>Both rounds passed: " + bothPass + "</p>";
    console.log(bothPass);

} else {
    bothPass = false;
    elResult.innerHTML = "<p>Both rounds passed: " + bothPass + "</p>";
    console.log(bothPass);
}






