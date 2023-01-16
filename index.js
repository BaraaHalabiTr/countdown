const countdown = () => {
    const date = new Date("June 30, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = date - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    $('#day').html(`${textDay}<strong>Days</strong>`);
    $('#hour').html(`${textHour}<strong>Hours</strong>`);
    $('#minute').html(`${textMinute}<strong>Minutes</strong>`);
    $('#second').html(`${textSecond}<strong>Seconds</strong>`);
}

countdown();
setInterval(countdown, 1000);