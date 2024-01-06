function showTime() {
    var currentTimeInSeconds = new Date();
    P.style.color = "red";
    P.innerHTML = "Current time: " + currentTimeInSeconds.toLocaleTimeString();
    Parent.appendChild(P);
}

    var Parent = document.getElementById('parentID');
    var P = document.createElement('h6');
    
showTime();
setInterval(function () {
    showTime();
}, 2000);