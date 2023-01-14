const timerMiliSecond = document.querySelector('.milisecond');
const timerSecond = document.querySelector('.second');
const timerMinute = document.querySelector('.minute');
const timerHour = document.querySelector('.hour');

// const transition = document.querySelector('.transition');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let timer;
let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer)
resetButton.addEventListener('click', resetTimer)

function addZero(n) {
    return n < 10 ? `0${n}` : n;
};

function startTimer() {
    timer = setInterval(() => {
        milisecond+=1;
        if(milisecond >= 100){
            second += 1
            milisecond = 0
        }
        if(second >= 60){
            minute += 1
            second = 0
        };
        if(minute >= 60){
            hour +=1
            minute = 0
        };
        timerMiliSecond.innerHTML = addZero(milisecond)
        timerSecond.innerHTML = addZero(second)
        timerMinute.innerHTML = addZero(minute)
        timerHour.innerHTML = addZero(hour)
        // transition.style.width = `${}px`
    }, 10);
    console.log('start')
}

function stopTimer() {
    clearInterval(timer);
    console.log('stop')
}

function resetTimer() {
    [milisecond, second, minute, hour] = [0, 0, 0, 0]
    startTimer()
    console.log('reset')
}
