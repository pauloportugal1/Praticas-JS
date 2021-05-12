var anyNumber = 10.23456;

var msg = "<h2>original number</h2><p>" + anyNumber + "</p>";
msg += "<h2>3 decimal places</h2><p>" + anyNumber.toFixed(3) + "</p>";
msg += "<h2>3 digits</h2><p>" + anyNumber.toPrecision(3) + "</p>";

elInfo = document.getElementById('info');
elInfo.innerHTML = msg;