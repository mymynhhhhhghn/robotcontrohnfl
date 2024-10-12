bluetooth.onBluetoothConnected(function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 155)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 70)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . # # # .
        . . . . .
        `)
    music.play(music.stringPlayable("- - C C D C D - ", 120), music.PlaybackMode.UntilDone)
})
bluetooth.onBluetoothDisconnected(function () {
    music.play(music.stringPlayable("F G F G F G F G ", 120), music.PlaybackMode.LoopingInBackground)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
})
basic.pause(1000)
Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 255, 255)
basic.showString(":]")
basic.showLeds(`
    . # . # .
    . # # # .
    # . . . #
    # . . . #
    . # # # .
    `)
