const clockMiliSecond = document.querySelector('.milisecondClock');
const clockSecond = document.querySelector('.second');
const clockMinute = document.querySelector('.minute');
const clockHour = document.querySelector('.hour');

const transition = document.querySelector('.transition');
// const startClock = document.querySelector('#start');
// const stopClock = document.querySelector('#stop');
// const resetClock = document.querySelector('#reset');

let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;

function addZero(n) {
    return n < 10 ? `0${n}` : n;
};

const timer = setInterval(() => {
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
    clockMiliSecond.innerHTML = addZero(milisecond)
    clockSecond.innerHTML = addZero(second)
    clockMinute.innerHTML = addZero(minute)
    clockHour.innerHTML = addZero(hour)
    // transition.style.width = `${}px`
}, 10);

console.log(
)

transition.classList.add('olA')

