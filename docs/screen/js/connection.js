// ================ Connection ================ //

'use strict'

let peer

window.addEventListener('load', function() {
    const hash = cyrb53('KTechi.github.com', 0)
    const id = parseInt(Math.random()*100000)
    peer = new Peer(hash+''+id)
    this.document.getElementById('id').innerText = id

    initialize_Peer()
    console.log('load connection.js')
})

function initialize_Peer() {
    // Open
    peer.on('open', function(id) {
        console.log('Open', id)
    })

    // Error
    peer.on('error', function(error) {
        console.log('Error')
    })

    // Connect
    peer.on('connection', function(connection) {
        console.log('Connect from [' + connection.peer + ']')

        // Receive
        connection.on('data', function(data) {
            const tmp = String(data).split(' ')
            if (tmp[1] == 'down') {
                clearInterval(animation)
                if (tmp[0] == 'up'   ) animation = setInterval(()=>{ y += 2; paint() }, 30)
                if (tmp[0] == 'left' ) animation = setInterval(()=>{ x -= 2; paint() }, 30)
                if (tmp[0] == 'right') animation = setInterval(()=>{ x += 2; paint() }, 30)
                if (tmp[0] == 'down' ) animation = setInterval(()=>{ y -= 2; paint() }, 30)
                if (tmp[0] == 'a') animation = setInterval(()=>{ y += 2; paint() }, 30)
                if (tmp[0] == 'b') animation = setInterval(()=>{ x -= 2; paint() }, 30)
                if (tmp[0] == 'c') animation = setInterval(()=>{ x += 2; paint() }, 30)
                if (tmp[0] == 'd') animation = setInterval(()=>{ y -= 2; paint() }, 30)
            }
            if (tmp[1] == 'up') {
                clearInterval(animation)
            }
        })
    })
}

function cyrb53(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed
    let h2 = 0x41c6ce57 ^ seed
    for (let i = 0; i < str.length; i++) {
      let ch = str.charCodeAt(i)
      h1 = Math.imul(h1 ^ ch, 2654435761)
      h2 = Math.imul(h2 ^ ch, 1597334677)
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909)
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909)
    return 4294967296 * (2097151 & h2) + (h1 >>> 0)
}