function getNextEvent(day, hour, minute) {
    let now = new Date();
    let eventDate = new Date(now);
    eventDate.setDate(now.getDate() + ((day + 7 - now.getDay()) % 7 || 7));
    eventDate.setHours(hour, minute, 0, 0);
    
    if (eventDate < now) {
        eventDate.setDate(eventDate.getDate() + 7);
    }
    return eventDate;
}

function updateCountdown(id, eventDate) {
    let now = new Date();
    let timeLeft = eventDate - now;
    
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById(id).innerHTML = `
        <div class="countdown">${days}<span class="label">Days</span></div>
        <div class="countdown">${hours}<span class="label">Hours</span></div>
        <div class="countdown">${minutes}<span class="label">Mins</span></div>
        <div class="countdown">${seconds}<span class="label">Secs</span></div>
    `;
}

function startCountdowns() {
    let wednesdayEvent = getNextEvent(3, 19, 0);
    let sundayEvent = getNextEvent(0, 9, 0);
    
    setInterval(() => {
        updateCountdown("countdownWednesday", wednesdayEvent);
        updateCountdown("countdownSunday", sundayEvent);
    }, 1000);
}

startCountdowns();