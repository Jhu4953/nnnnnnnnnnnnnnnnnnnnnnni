radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        on_off = 1
        while (on_off == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(1)
    on_off = 0
})
let on_off = 0
radio.setGroup(69)
