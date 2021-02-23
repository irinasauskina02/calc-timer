const endTimer = '2021-10-14';
const timer = document.querySelector('.timer'),
      days  =  document.querySelector('#days'),
      hours  =  document.querySelector('#hours'),
      minutes  =  document.querySelector('#minutes'),
      seconds  =  document.querySelector('#seconds');

function getTimer(endTimer) {
    const t = Date.parse(endTimer) - Date.parse(new Date()),
    day = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60) % 24)),
    minutes = Math.floor((t / 1000 / 60) % 60),
    second = Math.floor((t /  1000) % 60);

    return {
        'total': t,
        'days': day,
        'hours': hours,
        'minutes': minutes,
        'seconds': second
    };
}

function setZero(num) {
    if(num >= 0 && num < 10){
        return `0${num}`;            
    } else {
        return num;
    }  
} 
function updateTimer () {
    const timerNow = getTimer(endTimer);
    days.innerHTML = setZero(timerNow.days);
    hours.innerHTML = setZero(timerNow.hours);
    minutes.innerHTML = setZero(timerNow.minutes);
    seconds.innerHTML = setZero(timerNow.seconds);
    if(timerNow.total < 0) {
        clearInterval(interval);
    }
}

let interval = setInterval(updateTimer, 1000);

        