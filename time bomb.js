/*let inputEle = document.createElement("input");

function printkeydown(Event){
    console.log(Event.key);
}

inputEle.addEventListener("keyup",printkeydown);
document.body.appendChild(inputEle); */



let timerId = document.getElementById("timer");
let defEle = document.getElementById("defuser");
let count = 10;



let vaildInput = setInterval(function() {
    count = count - 1;
    timerId.textContent = count;
    if (count === 0) {
        timerId.textContent = "BOOM!!";
        timerId.style.color = "red";
        clearInterval(vaildInput);
    }
}, 1000);


defEle.addEventListener("keydown", function(event) {
    let bomberText = defEle.value;
    if(event.key === "Enter" && bomberText === "defuse" && count !== 0){
        timerId.textContent = "You Did It!";
        timerId.style.color = "green";
        clearInterval(vaildInput);
    }
    
});