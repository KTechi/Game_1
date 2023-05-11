// ================ Main ================ //

'use strict'

const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
let VW = window.innerWidth
let VH = window.innerHeight
let x = 0
let y = 0
let animation

function paint() {
    context.clearRect(0, 0, VW, VH)
    context.fillStyle = 'rgb(255, 255, 255, 1)'
    context.beginPath()
    context.arc(VW/2 + x, VH/2 - y, 30, 0, 2*Math.PI, true)
    context.fill()
}

// ================ Window Initialize ================ //

window.onload = load
window.onresize = resize
function load() {
    document.body.append(canvas)
    resize()
    console.log('load main.js')
    console.log('Ready')
}
function resize() {
    VW = parseInt(document.body.clientWidth)
    VH = parseInt(document.body.clientHeight)
    canvas.width  = VW
    canvas.height = VH
    paint()
}
function isMobile() {
    const regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    return window.navigator.userAgent.search(regexp) !== -1
}