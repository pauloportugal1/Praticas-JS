let table = 3;
let operator = 'addition';
let i = 1;
let msg = '';

if(operator == 'addition'){
    while(i <= 10){
        msg += i + " + " + table + " = " + (i+table) + "<br/>";
        i++;
    }
}else{
    while(i <= 10){
        msg += i + " x " + table + " = " + (i*table) + "<br/>";
        i++;
    }
}

var el = document.querySelector('#blackboard');
el.innerHTML = msg;