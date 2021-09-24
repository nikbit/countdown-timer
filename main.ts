input.onButtonPressed(Button.A, function () {
    if (Seconds < 50) {
        Seconds += 10
        basic.showNumber(Seconds)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    while (Seconds > 0) {
        basic.showNumber(Seconds)
        basic.pause(1000)
        Seconds += 0 - 1
    }
    basic.showIcon(IconNames.No)
    music.playMelody("C5 G C - - - - - ", 120)
})
input.onButtonPressed(Button.B, function () {
    if (Seconds < 60) {
        Seconds += 1
        basic.showNumber(Seconds)
        basic.clearScreen()
    }
})
let Seconds = 0
Seconds = 0
