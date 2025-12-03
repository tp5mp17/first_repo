function delayedReminder(remainerMessage) {
    return Promise((resolve) => {
        setTimeout(() => {

            console.log(remainerMessage);

            resolve('Reminder logged: ${reminderMessage}');

        });
    })
}