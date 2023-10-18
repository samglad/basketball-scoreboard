let homePointsEl = document.getElementById("home-points")

let homePoints = 0

function homeScore1() {
    homePoints = homePoints + 1
    homePointsEl.textContent = homePoints
} 

function homeScore2() {
    homePoints = homePoints + 2
    homePointsEl.textContent = homePoints
} 

function homeScore3() {
    homePoints = homePoints + 3
    homePointsEl.textContent = homePoints
} 

let guestPointsEL = document.getElementById("guest-points")
let guestPoints = 0

function guestScore1() {
    guestPoints = guestPoints + 1
    guestPointsEL.textContent = guestPoints
}

function guestScore2() {
    guestPoints = guestPoints + 2
    guestPointsEL.textContent = guestPoints
}

function guestScore3() {
    guestPoints = guestPoints + 3
    guestPointsEL.textContent = guestPoints
}
