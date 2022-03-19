joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendString("DN")
    basic.showArrow(ArrowNames.South)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showString("A")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendString("UP")
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.showString("B")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendValue("speed", 10)
    basic.showIcon(IconNames.Triangle)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendValue("speed", 10)
    basic.showIcon(IconNames.Triangle)
})
joystickbit.initJoystickBit()
radio.setGroup(1)
joystickbit.Vibration_Motor(500)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    radio.sendValue("vx", joystickbit.getRockerValue(joystickbit.rockerType.X))
    radio.sendValue("vy", joystickbit.getRockerValue(joystickbit.rockerType.Y))
})
