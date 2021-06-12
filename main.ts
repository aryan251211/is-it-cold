basic.forever(function () {
    if (input.temperature() < 22) {
        basic.showString("COLD! TURN ON THE HEATER")
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
