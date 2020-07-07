function Left () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, PCA96852)
}
function move_right () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 5, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 25, PCA96852)
    basic.pause(100)
}
function MoveStop () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 15, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 15, PCA96852)
}
function MoveRight () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 25, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 5, PCA96852)
}
function move_left () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 25, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 5, PCA96852)
    basic.pause(100)
}
function MoveBack () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 15, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 15, PCA96852)
}
function MoveLeft () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 5, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 25, PCA96852)
}
function Right () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, PCA96852)
}
function MoveForward () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 15, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 15, PCA96852)
}
let right_st = 0
let left_st = 0
let rightline = 0
let leftline = 0
let PCA96852 = 0
basic.clearScreen()
let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
strip.clear()
PCA96852 = 67
PCA9685.reset(PCA96852)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 100, PCA96852)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 100, PCA96852)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 100, PCA96852)
basic.pause(1999)
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Whole))
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    leftline = pins.digitalReadPin(DigitalPin.P13)
    rightline = pins.digitalReadPin(DigitalPin.P12)
    if (leftline == 0 && rightline == 0) {
        if (left_st == 1 && right_st == 1) {
            MoveStop()
            basic.pause(250)
            strip.clear()
            strip.showColor(neopixel.rgb(200, 250, 0))
            strip.show()
            move_left()
            basic.showLeds(`
                . # # # .
                . . . . #
                . # # . #
                . # . . #
                . . # # .
                `)
            MoveForward()
            basic.showString("Done!")
            music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
            strip.clear()
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            strip.show()
            basic.showString("Do You like phonk?")
            basic.pause(300)
            basic.showString("I like that!")
            basic.pause(400)
            basic.showIcon(IconNames.Heart)
        }
    }
    if (leftline == 0 && rightline == 0) {
        if (left_st == 1 && right_st == 0) {
            MoveStop()
            basic.pause(250)
            MoveBack()
            music.playMelody("D - D - D - D - ", 112)
            basic.showString("Loading...")
        }
    }
    if (leftline == 0 && rightline == 0) {
        if (left_st == 0 && right_st == 1) {
            MoveStop()
            basic.pause(300)
            MoveBack()
            music.playMelody("D - D - D - D - ", 112)
            basic.showString("Loading...")
        }
    }
    if (leftline == 0 && rightline == 1) {
        MoveRight()
        strip.clear()
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    if (leftline == 1 && rightline == 0) {
        MoveLeft()
        strip.clear()
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    if (leftline == 1 && rightline == 1) {
        MoveForward()
        basic.pause(1000)
        basic.showString("Done!")
        basic.pause(3000)
        basic.showString("again phonk!")
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
        strip.clear()
        strip.showColor(neopixel.rgb(0, 255, 121))
        strip.show()
    }
    left_st = leftline
    right_st = rightline
})
