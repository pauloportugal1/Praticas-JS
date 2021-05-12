var anyNumber = Math.floor((Math.random() * 10) + 1);

var msg = "<h2>random number</h2><p>" + anyNumber + "</p>";

var elInfo = document.getElementById('info');
elInfo.innerHTML = msg;
