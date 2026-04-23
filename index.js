let homeScore = 0
let guestScore = 0
let period = 1;
let timeLeft = 720 //12 (minutes in seconds)
let timerInterval

function changeScore(team, amount) {
if (team === 'home') {
homeScore += amount
document.getElementById("home-el").innerText = homeScore;
}
else if (team === 'guest') {
guestScore += amount
document.getElementById("guest-el").innerText = guestScore;
}
}
function nextPeriod() {
    period += 1
    document.getElementById("period-el").innerText = "period: " + period
}

function startTimer() {
    clearInterval(timerInterval)
    timerInterval = setInterval(function() {
    if (timeLeft <= 0) {
        clearInterval(timerInterval)
}
else {
    timeleft--
    let minutes = Math.floor(timeleft / 60)
    let seconds = timeleft % 60
    document.getElementById("timer-el").innerText = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds)
}
}, 1000)
}
function stopTimer() {
    clearInterval(timerInterval)
}
function resetTimer() {
    stopTimer()
    homeScore = 0
    guestScore = 0
    period = 1
    timeleft = 720
    document.getElementById("home-el").innerText = 0
    document.getElementById("guest-el").innerText = 0
    document.getElementById("period-el").innerText = "Period: 1"
    document.getElementById("timer-el").innerText = "12:00"
}