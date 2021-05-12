let scores = [24, 32, 17];
let roundNumber = 0;
let msg = "";
let i;

for(i = 0; i < scores.length; i++){
    roundNumber++;
    msg += 'Round ' + roundNumber + ': ';
    msg += scores[i] + '<br/>';
}

document.querySelector('#answer').innerHTML = msg;
