// ================ Event Listener ================ //

'use strict'

window.addEventListener('load', function() {
    const get = (id) => document.getElementById(id)

    get('up').addEventListener('touchstart', function(e) {
        e.preventDefault()
        for (const conn of connections) {
            console.log('up down')
            conn.send('up down')
        }
    })
    get('up').addEventListener('touchend', function() {
        for (const conn of connections) {
            console.log('up up')
            conn.send('up up')
        }
    })
    get('left').addEventListener('touchstart', function(e) {
        e.preventDefault()
        for (const conn of connections) {
            console.log('left down')
            conn.send('left down')
        }
    })
    get('left').addEventListener('touchend', function() {
        for (const conn of connections) {
            console.log('left up')
            conn.send('left up')
        }
    })
    get('right').addEventListener('touchstart', function(e) {
        e.preventDefault()
        for (const conn of connections) {
            console.log('right down')
            conn.send('right down')
        }
    })
    get('right').addEventListener('touchend', function() {
        for (const conn of connections) {
            console.log('right up')
            conn.send('right up')
        }
    })
    get('down').addEventListener('touchstart', function(e) {
        e.preventDefault()
        for (const conn of connections) {
            console.log('down down')
            conn.send('down down')
        }
    })
    get('down').addEventListener('touchend', function() {
        for (const conn of connections) {
            console.log('down up')
            conn.send('down up')
        }
    })

    get('a').addEventListener('touchstart', function(e) {
        e.preventDefault()
        for (const conn of connections) {
            console.log('a down')
            conn.send('a down')
        }
    })
    get('a').addEventListener('touchend', function() {
        for (const conn of connections) {
            console.log('a up')
            conn.send('a up')
        }
    })
    get('b').addEventListener('touchstart', function(e) {
        e.preventDefault()
        for (const conn of connections) {
            console.log('b down')
            conn.send('b down')
        }
    })
    get('b').addEventListener('touchend', function() {
        for (const conn of connections) {
            console.log('b up')
            conn.send('b up')
        }
    })
    get('c').addEventListener('touchstart', function(e) {
        e.preventDefault()
        for (const conn of connections) {
            console.log('c down')
            conn.send('c down')
        }
    })
    get('c').addEventListener('touchend', function() {
        for (const conn of connections) {
            console.log('c up')
            conn.send('c up')
        }
    })
    get('d').addEventListener('touchstart', function(e) {
        e.preventDefault()
        for (const conn of connections) {
            console.log('d down')
            conn.send('d down')
        }
    })
    get('d').addEventListener('touchend', function() {
        for (const conn of connections) {
            console.log('d up')
            conn.send('d up')
        }
    })

    console.log('load event_listener.js')
})

// ================ Window Initialize ================ //
window.onload = load
function load() {
    document.getElementById('state').innerText = 'input id →'
    console.log('Ready')
}
function isMobile() {
    const regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    return window.navigator.userAgent.search(regexp) !== -1
}