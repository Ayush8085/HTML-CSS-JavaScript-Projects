function change(x) {
    return (x < 10 ? '0' : '') + x;
}

let a;
let hour;
let minute;
let seconds;
let ampm;

setInterval(() => {
    a = new Date();
    hour = a.getHours();
    minute = a.getMinutes();
    seconds = a.getSeconds();
    ampm = 'AM'

    if(hour > 12) {
        hour = hour - 12;
        ampm = 'PM'
    }

    document.getElementById('hours').innerHTML = change(hour);
    document.getElementById('minutes').innerHTML = change(minute);
    document.getElementById('seconds').innerHTML = change(seconds);
    document.getElementById('ampm').innerHTML = ampm;
}, 1000);
