input.onButtonPressed(Button.A, function () {
    x = (a * x + b) % c
    basic.showNumber(x)
})
let x = 0
let c = 0
let b = 0
let a = 0
a = 1
b = 8
c = 4
x = 14
