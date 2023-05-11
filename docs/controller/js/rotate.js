// ================ Rotate ================ //

'use strict'

let LEFT = 0
let RIGHT = 1
let posture = LEFT

window.addEventListener('load', function() {
    const get = (id) => document.getElementById(id)
    const position = function(id, top, left, right, bottom) {
        get(id).style.top    = top
        get(id).style.left   = left
        get(id).style.right  = right
        get(id).style.bottom = bottom
    }

    get('rotate').addEventListener('click', function() {
        posture = (posture === LEFT) ? RIGHT : LEFT
        if (posture === LEFT) {
            get('rotate').style.transform = 'translate(-50%, -50%) rotate(90deg)'
            get('direction').style.transform = 'rotate(90deg)'
            get('action'   ).style.transform = 'rotate(90deg)'
            position('direction', '1rem', '1rem', 'auto', 'auto')
            position('action'   , 'auto', '1rem', 'auto', '1rem')

            get('connect').style.transform = 'rotate(90deg)'
            get('connect').style.left  = 'auto'
            get('connect').style.right = '1rem'

            get('state').style.transform = 'translate(100%) rotate(90deg)'
            get('state').style.transformOrigin = 'left top'
            position('state', '0rem', 'auto', '0rem', 'auto')
        } else {
            get('rotate').style.transform = 'translate(-50%, -50%) rotate(-90deg)'
            get('direction').style.transform = 'rotate(-90deg)'
            get('action'   ).style.transform = 'rotate(-90deg)'
            position('direction', 'auto', 'auto', '1rem', '1rem')
            position('action'   , '1rem', 'auto', '1rem', 'auto')

            get('connect').style.transform = 'rotate(-90deg)'
            get('connect').style.left  = '1rem'
            get('connect').style.right = 'auto'

            get('state').style.transform = 'translate(0, 100%) rotate(-90deg)'
            get('state').style.transformOrigin = 'left top'
            position('state', 'auto', '0rem', 'auto', '0rem')
        }
    })

    console.log('load rotate.js')
})