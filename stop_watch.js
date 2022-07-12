const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let startTime;
let timeOutId;
let elapsedTime = 0;

function countUp (){
    
    const d = new Date(Date.now()- startTime + elapsedTime);
    const h = String(d.getUTCHours()).padStart(1,'0');
    const m = String(d.getMinutes()).padStart(1,'0');
    const s =String(d.getSeconds()).padStart(1,'0');
    const ms =String(d.getMilliseconds()).slice(0,1);

    timer.textContent = `${h} : ${m} : ${s} : ${ms}`;
    
    timeOutId = setTimeout(() => {
        countUp();
    },10);
    }
    
    function buttonInitial (){
        start.classList.remove('inactive');
        stop.classList.add('inactive');
        reset.classList.add('inactive');
        stop.disabled = true;
        reset.disabled = true;
    }
    function buttonRunning (){
        start.classList.add('inactive');
        stop.classList.remove('inactive');
        reset.classList.add('inactive');
        start.disabled = true;
        stop.disabled = false;
        reset.disabled = true;
    }
    function buttonStopped (){
        start.classList.add('inactive');
        stop.classList.add('inactive');
        reset.classList.remove('inactive');
        start.disabled = true;
        stop.disabled = true;
        reset.disabled = false;
    }
    
    buttonInitial()
    
    start.addEventListener('click',() => {
        if (start.classList.contains('inactive') === true) {
            return;
        }
        buttonRunning();
        startTime = Date.now();
        countUp();
    })
    
    stop.addEventListener('click', () => {
        if (stop.classList.contains('inactive') === true) {
            return;
        }
        buttonStopped();
        clearTimeout(timeOutId);
        elapsedTime += Date.now() - startTime;
    })
    
    reset.addEventListener('click', () => {
        if(reset.classList.contains('inactive') === true) {
            return;
        }
        buttonInitial();
        timer.textContent = '0:0:0:0';
        elapsedTime = 0;
        start.disabled =false;
    })