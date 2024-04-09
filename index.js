let homeCounter = document.getElementById("home-counter")
let guestCounter = document.getElementById("guest-counter")

let counter = 0;
let counterTwo = 0;
homeCounter.textContent = counter
guestCounter.textContent = counter

function addOne() {
    counter+=1
    homeCounter.textContent = counter
}

function addTwo() {
    counter+=2
    homeCounter.textContent = counter
}

function addThree() {
    counter+=3
    homeCounter.textContent = counter
}

function addGuestOne() {
    counterTwo+=1
    guestCounter.textContent = counterTwo
}

function addGuestTwo() {
    counterTwo+=2
    guestCounter.textContent = counterTwo
}

function addGuestThree() {
    counterTwo+=3
    guestCounter.textContent = counterTwo
}

function newGame() {
    counter = 0;
    counterTwo = 0;
    homeCounter.textContent = counter
    guestCounter.textContent = counterTwo
}
