const timer = document.querySelector(".countdown");
const launchDate = new Date("May 20, 2019, 00:00:00").getTime();

/* Function to set time */
function setTime() {
    const currentTime = new Date().getTime();
    const millis = launchDate - currentTime;
    
    if (millis < 0) {
        clearInterval(interval);
        timer.innerHTML = "We're up!"
    }
    
    const days = Math.floor(millis / (1000 * 60 * 60 * 24));
    const hours = Math.floor(millis / (1000 * 60 * 60) - 24 * days);
    const minutes = Math.floor(millis / (1000 * 60) - 24 * 60 * days - 60 * hours);
    const seconds = Math.floor(millis / (1000) - 24 * 60 * 60 * days - 60 * 60 * hours - 60 * minutes);

    timer.innerHTML = `
    <div>${days}<span>days</span></div>
    <div>${hours}<span>hours</span></div>
    <div>${minutes}<span>minutes</span></div>
    <div>${seconds}<span>seconds</span></div>
    `;
}

/* Set the interval */
const interval = setInterval(setTime, 1000);
