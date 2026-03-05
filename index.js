let homeScore = 0;
let guestScore = 0;
let period = 1;
let timeleft = 720; 12 (minutes in seconds)
let timerInterval;

function changeScore(team, amount) {
homeScore = (0, homeScore + amount)
document.getElementById("home-el").innerText = homeScore;
guestScore = (0, homeScore + amount)
document.getElementById("guest-el").innerText = guestScore;
}

function nextPeriod() {
    period = 1
    period += 1
    document.getElementById("period-el").innerText = "period: " + period
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval()
    let secs = timeleft; 60
    document.getElementById("timer-el").innerText = 10
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