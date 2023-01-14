const timerMiliSecond = document.querySelector('.milisecond');
const timerSecond = document.querySelector('.second');
const timerMinute = document.querySelector('.minute');
const timerHour = document.querySelector('.hour');

// const transition = document.querySelector('.transition');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');

let timer, controlerKey;
let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;

startButton.addEventListener('click', timerControler)
resetButton.addEventListener('click', resetTimer)

function addZero(n) {
    return n < 10 ? `0${n}` : n;
};

function timerControler() {
    return !controlerKey ? startTimer() : stopTimer()
}

function startTimer(){
    controlerKey = true
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
    }, 10);
    startButton.innerHTML = 'STOP'
    startButton.classList.add('btn-stop')
    console.log('start')
}

function stopTimer() {
    controlerKey = false
    clearInterval(timer);
    startButton.innerHTML = 'START'
    startButton.classList.remove('btn-stop')
    console.log('stop')
}

function resetTimer() {
    [milisecond, second, minute, hour] = [0, 0, 0, 0]
    timerMiliSecond.innerHTML = addZero(milisecond)
    timerSecond.innerHTML = addZero(second)
    timerMinute.innerHTML = addZero(minute)
    timerHour.innerHTML = addZero(hour)
    console.log('reset')
}
