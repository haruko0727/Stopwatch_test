const timer = document.getElementById('timer')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

let startTime;
let timeOutId;
let elapsedTime = 0;

function countUp (){
    const d = new Date(Date.now() - startTime + elapsedTime);
    const h = String(d.getHours()).padStart(2,`0`)
    const m = String(d.getMinutes()).padStart(2,`0`)
    const s =String(d.getSeconds()).padStart(2,`0`)
    const ms =String(d.getMilliseconds()).padStart(2,`0`)

    timer.innerHTML = `${h} ":" ${m} ":" ${s} ":" ${ms}`;
    
}