const container = document.querySelector('.container');
const text = document.getElementById('text');

let totalTime = 15000;
let breatheTime = (totalTime / 5) * 2;
let holdTime = totalTime / 5;

meditateAnimation();


function meditateAnimation() {
    text.innerHTML = '吸うべし';
    container.className = 'container grow';
    setTimeout(() => { 
        text.innerHTML = '止めるべし';

        setTimeout(() => {
            text.innerHTML = '吐くべし';
            container.className = 'container shrink';
        }, holdTime);
    },breatheTime);
}

setInterval(meditateAnimation, totalTime);