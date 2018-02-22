const buttons = document.querySelectorAll('[data-time]');
const inputMin = document.getElementById('minutes');
const form = document.forms['customForm'];

const timer = (function () {

    let countdown,
        timerDisplay,
        endTime,
        alarmSound;
    
    function init(settings) {
        timerDisplay = document.querySelector(settings.timeLeftSelector);
        endTime = document.querySelector(settings.timeEndSelector);

        if (settings.alarmSound){
            alarmSound = new Audio(settings.alarmSound);
        }
        return this;
    }

    function start(seconds) {
        if(!timerDisplay || !endTime) return console.log('Please init module first.');
        if (!seconds || typeof seconds !== 'number') return console.log ('Please provide seconds');
        clearInterval(countdown);
        if(alarmSound) {
            alarmSound.pause();
            alarmSound.currentTime = 0;
        }
        const now = Date.now();
        const then = now + seconds * 1000;
        displayTimeLeft(seconds);
        displayEndTime(then);
        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            if (secondsLeft < 0){
                clearInterval(countdown);
                playSound();
                return;
            }
            displayTimeLeft(secondsLeft);
        }, 1000);
    }

    function displayTimeLeft(seconds) {
        const sec = seconds % 60;
        const min = ( Math.floor(seconds / 60) ) % 60;
        const hour = ( Math.floor(seconds / 3600) ) % 24;
        const day = ( Math.floor(seconds / 86400) );
        const display =
            `${day < 10 ? '0' : ''}${day} ${'days'}
            :${hour < 10 ? '0' : ''}${hour}
            :${min < 10 ? '0' : ''}${min}
            :${sec < 10 ? '0' : ''}${sec}`;

            document.title = display;
            timerDisplay.textContent = display;
    }

    function displayEndTime(timestamp) {
        const end = new Date(timestamp);
        const hour = end.getHours();
        const minutes = end.getMinutes();
        endTime.textContent = `be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

    function stop() {
        clearInterval(countdown);
        return displayTimeLeft(0);
    }

    function playSound() {
        alarmSound.play();
    }

    return{
        init,
        start,
        stop
    }

}());

timer.init({
    timeLeftSelector: '.display__time-left',
    timeEndSelector: '.display__end-time',
    alarmSound: 'audio/bell.mp3',
}).start();

function startTimer(e) {
    const seconds = parseInt(this.dataset.time);
    timer.start(seconds);
}

function stopTimer(){
    timer.stop();
}

function setTime(e) {
    e.preventDefault();
    let minute = +inputMin.value;
    if ( (minute ^ 0) !== minute || minute === 0 || minute === '' ) return alert('Please init minute');
    timer.start(minute * 60);
    form.reset();
}

buttons.forEach( btn => btn.addEventListener('click', startTimer) );