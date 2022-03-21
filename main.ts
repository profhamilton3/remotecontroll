joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendString("DN")
    basic.showArrow(ArrowNames.SouthEast)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showString("A")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendValue("speed", -10)
    basic.showArrow(ArrowNames.South)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.showString("B")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendString("UP")
    basic.showArrow(ArrowNames.NorthEast)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendValue("speed", 10)
    basic.showArrow(ArrowNames.North)
})
joystickbit.initJoystickBit()
radio.setGroup(1)
radio.setFrequencyBand(16)
radio.setTransmitPower(7)
joystickbit.Vibration_Motor(500)
let pY0 = joystickbit.getRockerValue(joystickbit.rockerType.Y)
let pX0 = joystickbit.getRockerValue(joystickbit.rockerType.X)
let pX = pX0
let pY = pY0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (Math.abs(joystickbit.getRockerValue(joystickbit.rockerType.X) - pX) > 50 && Math.abs(joystickbit.getRockerValue(joystickbit.rockerType.X) - pX0) > 50) {
        radio.sendValue("vx", joystickbit.getRockerValue(joystickbit.rockerType.X))
        basic.pause(200)
        pX0 = joystickbit.getRockerValue(joystickbit.rockerType.X)
    }
    if (Math.abs(joystickbit.getRockerValue(joystickbit.rockerType.Y) - pY) > 50 && Math.abs(joystickbit.getRockerValue(joystickbit.rockerType.Y) - pY0) > 50) {
        radio.sendValue("vy", joystickbit.getRockerValue(joystickbit.rockerType.Y))
        basic.pause(200)
        pY = joystickbit.getRockerValue(joystickbit.rockerType.Y)
    }
    basic.pause(200)
})
