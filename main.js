const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function rotateClock() {
    const now = new Date();

    const seconds = now.getSeconds()
    const oneSecond = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${oneSecond}deg)`;
    console.log(seconds)

    const minutes = now.getMinutes()
    const oneMinute = ((minutes / 60) * 360);
    minuteHand.style.transform = `rotate(${oneMinute}deg)`;

    const hours = now.getHours();
    const oneHour = ((hours / 24) * 360);
    hourHand.style.transform = `rotate(${oneHour}deg)`
}

setInterval(rotateClock, 1000);