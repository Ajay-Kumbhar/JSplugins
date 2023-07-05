let html = 
`<div id="stopwatch">
    <div id="watch">
    <div class="tblock"><p class="time" id="hr">00</p><p id="hr-text">Hours</p></div>
    <div class="tblock"><p class="time" id="min">00</p><p id="min-text">Minutes</p></div>
    <div class="tblock"><p class="time" id="sec">00</p><p id="sec-text">Seconds</p></div>
    <div class="tblock"><p class="time" id="csec">00</p><p id="csec-text">Centiseconds</p></div>
    </div>
    <div id="btngrp">
        <button id="start" onclick="start()">Start</button>
        <button id="stop" onclick="stop()">Stop</button>
        <button id="reset" onclick="reset()">Reset</button>
    </div>
</div>`

let stopwatch = document.createElement('div');
stopwatch.innerHTML = html;
document.body.appendChild(stopwatch);

let hours = 0;
let minutes = 0;
let seconds = 0;
let centiseconds = 0;


let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let csec = document.getElementById('csec');

let run=false;

function start(){
    if(!run){
        run=true;
        runclock();
    }
}

function stop(){
    run=false;
}

function reset(){
    run=false;
    centiseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    csec.innerHTML = "00";
    sec.innerHTML = "00";
    min.innerHTML = "00";
    hr.innerHTML = "00";
}

function runclock(){
    if(run){
       centiseconds++;
       if(centiseconds==100){
            centiseconds=0;
            seconds++;
        }
        if(seconds==60){
            seconds=0;
            minutes++;
        }
        if(minutes==60){
            minutes=0;
            hours++;
        }

        csec.innerHTML = centiseconds<10 ? '0'+ centiseconds: centiseconds;
        sec.innerHTML = seconds<10 ? '0'+ seconds: seconds;
        min.innerHTML = minutes<10 ? '0'+ minutes : minutes;
        hr.innerHTML = hours<10 ? '0'+ hours : hours;

        setTimeout("runclock()", 10);
    }
}