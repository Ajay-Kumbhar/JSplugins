let html = 
`<div id="timer">
    <div id="watch">
    <div class="tblock">
    <p class="time" id="hr">
        <button class="plus" onclick="change('hr','+')">+</button>
        <span id="hnum">00</span>
        <button class="minus" onclick="change('hr','-')">-</button>
    </p>
    <p id="hr-text">Hours</p></div>
    <div class="tblock">
    <p class="time" id="min">
        <button class="plus" onclick="change('min','+')">+</button>
        <span id="mnum">00</span>
        <button class="minus" onclick="change('min','-')">-</button>
    </p>
    <p id="min-text">Minutes</p></div>
    <div class="tblock">
    <p class="time" id="sec">
        <button class="plus" onclick="change('sec','+')">+</button>
        <span id="snum">00</span>
        <button class="minus" onclick="change('sec','-')">-</button>
    </p>
    <p id="sec-text">Seconds</p></div>
    </div>
    <div id="btngrp">
        <button id="start" onclick="start()">Start</button>
        <button id="stop" onclick="stop()">Stop</button>
        <button id="reset" onclick="reset()">Reset</button>
    </div>
</div>`

let timer = document.createElement('div');
timer.innerHTML = html;
document.body.appendChild(timer);

let hours = 0;
let minutes = 0;
let seconds = 0;


let hr = document.getElementById('hnum');
let min = document.getElementById('mnum');
let sec = document.getElementById('snum');

function change(id, sign){
    if(id=='hr'){
        if(sign=='+'){
            hours++;
            if(hours==24){
                hours=0;
            }
        }else{
            hours--;
            if(hours<0){
                hours=23;
            }
        }
        hr.textContent = hours<10 ? '0' + hours : hours;
    }else if(id=='min'){
        if(sign=='+'){
            minutes++;
            if(minutes==60){
                minutes=0;
            }
        }else{
            minutes--;
            if(minutes<0){
                minutes=59;
            }
        }
        min.textContent = minutes<10 ? '0' + minutes : minutes;
    }else{
        if(sign=='+'){
            seconds++;
            if(seconds==60){
                seconds=0;
            }
        }else{
            seconds--;
            if(seconds<0){
                seconds=59;
            }
        }
        sec.textContent = seconds<10 ? '0' + seconds : seconds;
    }
}

let arr1 = document.getElementsByClassName('plus');
let arr2 = document.getElementsByClassName('minus');
arr1 = [...arr1, ...arr2];

let run = false;

function start(){
    if(!run){
        run = true;
        for(let item of arr1){
            item.style.visibility = "hidden";
        }
        setTimeout("runtimer()",1000);
    }
}

function stop(){
    run = false;
    for(let item of arr1){
        item.style.visibility = "visible";
    }
}

function reset(){
    run = false;
    for(let item of arr1){
        item.style.visibility = "visible";
    }
    hours = 0;
    minutes = 0;
    seconds = 0;
    hr.textContent = "00";
    min.textContent = "00";
    sec.textContent = "00";
}

function runtimer(){
    if(run){
        seconds--;
        
        if(seconds<0){
            minutes--;
        }
        if(minutes<0){
            hours--;
        }

        if(seconds<0 && minutes>=0){
            seconds = 59;
        }else if(seconds<0 && hours>=0){
            minutes = 59;
            seconds = 59;
        }else if(seconds<0){
            run = false;
        }

        if(run){
            hr.textContent = hours<10 ? '0' + hours : hours;
            min.textContent = minutes<10 ? '0' + minutes : minutes;
            sec.textContent = seconds<10 ? '0' + seconds : seconds;
            setTimeout("runtimer()", 1000);
        }else{
            for(let item of arr1){
                item.style.visibility = "visible";
            }
            hours = 0;
            minutes = 0;
            seconds = 0;
        }
    }
}