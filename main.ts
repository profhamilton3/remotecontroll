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
radio.setGroup(127)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
joystickbit.Vibration_Motor(500)
let pY = joystickbit.getRockerValue(joystickbit.rockerType.Y)
let pX = joystickbit.getRockerValue(joystickbit.rockerType.X)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    if (pX != joystickbit.getRockerValue(joystickbit.rockerType.X)) {
        radio.sendValue("vx", joystickbit.getRockerValue(joystickbit.rockerType.X))
        basic.pause(200)
        pX = joystickbit.getRockerValue(joystickbit.rockerType.X)
    }
    if (pY != joystickbit.getRockerValue(joystickbit.rockerType.Y)) {
        radio.sendValue("vy", joystickbit.getRockerValue(joystickbit.rockerType.Y))
        basic.pause(200)
        pY = joystickbit.getRockerValue(joystickbit.rockerType.Y)
    }
    basic.pause(200)
})
