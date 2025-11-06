 const userinfo = {
        "username": "user1",
        "password": "password123"
    }

function createLoginTracker(userinfo) {
    
    let attemptCount = 0;

    const checkPassword = (attemptPassword) => {
        attemptCount = attemptCount + 1;

        if (attemptPassword === userinfo.Password && attemptCount <= 3) {
            return("login successful");
        }
        else if (attemptPassword != userinfo.password && attemptCount <= 3) {
            return(`Attempt ${attempt}: login failed`);
        } else {
            return("Account is locked due to too many attempts")
        }
    }    
    return (attempt) => checkPassword(attempt)
}
 module.exports = {
    ...createLoginTracker(typeof createLoginTracker !== 'undefined' && {createLoginTracker})
 };