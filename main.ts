input.onGesture(Gesture.Shake, function () {
    OLED.init(128, 64)
    pas = 0
    pbs = 0
    t = 0
    r = 0
    OLED.writeStringNewLine("wanna play a game?")
    basic.pause(2000)
    update()
})
function update () {
    OLED.clear()
    OLED.writeStringNewLine("Player A score: " + pas2)
    OLED.newLine()
    OLED.writeStringNewLine("Player B score: " + pbs2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + u)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:  " + s)
}
let r = 0
let t = 0
let pbs = 0
let pas = 0
let s = 0
let u = 0
let pbs2 = 0
let pas2 = 0
OLED.init(128, 64)
pas2 = 0
pbs2 = 0
u = 0
s = 0
OLED.writeStringNewLine("wanna play a game?")
basic.pause(2000)
update()
basic.forever(function () {
	
})
