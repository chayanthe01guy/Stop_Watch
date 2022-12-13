const startBtnEl = document.querySelector(".start");
const stopBtnEl = document.querySelector(".stop");
const resetBtnEl = document.querySelector(".reset");

var counter = "0" + 0;
var sec = "0" + 0;
var min = "0" + 0;
var hr = "0" + 0;
let stopWatch;

startBtnEl.addEventListener("click", () => {
    stopWatch = setInterval(()=> {
        counter++;
        counter = counter < 10 ? "0" + counter : counter;

        if (counter == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            counter = "0" + 0;
        }
       
        if (sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        
        if (min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
            sec = "0" + 0; 
        }
        
        document.querySelector(".hour").innerText = hr;
        document.querySelector(".minute").innerText = min;
        document.querySelector(".second").innerText = sec;
        document.querySelector(".milliSecond").innerText = counter;
    }, 10)
});

stopBtnEl.addEventListener("click", () => {
    clearInterval(stopWatch);
});

resetBtnEl.addEventListener("click", () => {
    clearInterval(stopWatch);
    counter = "0" + 0;
    sec = "0" + 0;
    min = "0" + 0;
    hr = "0" + 0;

    document.querySelector(".hour").innerText = "00";
    document.querySelector(".minute").innerText = "00";
    document.querySelector(".second").innerText = "00";
    document.querySelector(".milliSecond").innerText = "00";
});