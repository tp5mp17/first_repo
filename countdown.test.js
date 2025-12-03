function countdownTimer(initialTimeinSeconds) {
    let remainingTime = initialTimeinSeconds;

    const timerId = setInterval(() => {
        
        console.log(remainingTime);

        if (remainingTime <= 0) {
            clearInterval(timerId);
            console.log("Countdown finished");
        } else {
            remainingTime--;
        }
    }, 1000);

    return timerId;
}