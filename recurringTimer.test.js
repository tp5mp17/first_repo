function recurringTimer(message, interval) {
    const timerId = SetInterval(() => {
        console.log(message);
    }, interval);
    console.log('Timer started with ID: ${timerId}. logging "${message}" every ${interval}ms.');

    return timerId;
}

function stopRecurringTimer(timerId) {
    clearInterval(timerId);
    console.log('timer with Id: ${timerId} ha been stopped.');
    
}