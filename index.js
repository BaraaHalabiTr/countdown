const s1 = "hey, today we're less than 100 days away from being officially together, I just can't express enough how much I'm excited for that day to come, By the time I'm writing this to you I know how much we've been through and I'll always have trust in you and in your strength that we will get through all of that shit together, I really really love you and that pretty face of yours, no you don't understand it how much i love you, lastly I hope you do well in all of what's upcoming and awaiting us in those years, love you again. Me :)... and you can click any where to continue";
let timer;

const countdown = () => {
    const date = new Date("June 30, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = date - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    $('#day').html(`${textDay}<strong>Days</strong>`);
    $('#hour').html(`${textHour}<strong>Hours</strong>`);
    $('#minute').html(`${textMinute}<strong>Minutes</strong>`);
    $('#second').html(`${textSecond}<strong>Seconds</strong>`);
    
    if(textDay == 100 && textSecond == 0) {
        clearInterval(timer);
        animateWord(s1).then(() => {
            document.body.addEventListener('click', () => {
                const confetti = new JSConfetti();
                confetti.addConfetti({
                    emojis: ['💞', '🫂', '🦋', '🌈', '✨'],
                    emojiSize: 60,
                    confettiNumber: 100
                }).then(() => {
                    location.reload();
                });
            })
        });
    }
}

timer = setInterval(countdown, 1000);


const animateWord = (word) => {
    return new Promise((res, rej) => {
        let step = 0;
        let animationTimer;
        // $('#day').hide();
        // $('#hour').hide();
        // $('#minute').hide();
        // $('#second').hide();
        $('.container').hide();
        $('#fancy').show();
        step = 0;
        $('#fancy').html('');
        const arr = word.split('');
        arr.forEach(letter => {
            $('#fancy').append($(`<span>${letter}</span>`));
        });
        animationTimer = setInterval(() => {
            const parent = document.getElementById('fancy');
            el = parent.querySelectorAll('span')[step];
            step ++;
            // el = $('#fancy').find('span', step);
            el.classList.add('fade');
            if(step >= arr.length) {
                clearInterval(animationTimer);
                res(true);
            }
        }, 50
        );
    });
}

countdown();
