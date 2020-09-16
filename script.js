setInterval(runClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function runClock() {
    const currentDate = new Date()
    console.log(currentDate)
    const seconds = currentDate.getSeconds() / 60
    const minutes = (seconds + currentDate.getMinutes()) / 60
    const hours = (minutes + currentDate.getHours()) / 12

    rotateClock(secondHand, seconds)
    rotateClock(minuteHand, minutes)
    rotateClock(hourHand, hours)

}

function rotateClock(element, rotationValue) {
    element.style.setProperty('--rotationDegree', rotationValue * 360)
}

runClock()