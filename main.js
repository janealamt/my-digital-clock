window.onload = function() {
    main();
}

const hour = document.getElementById('hour');
const minutes = document.getElementById('minute');
const second = document.getElementById('second');
const progress = document.getElementById('progress');

function main() {



    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour.textContent = hr;
    minutes.textContent = min;
    second.textContent = sec;
    progress.style.width = (sec / 60) * 100 + '%';

}

setInterval(main, 1000);