// ================ Connection ================ //

'use strict'

let peer = new Peer()
const connections = []
const input = document.createElement('input')
input.addEventListener('focus' , event => {
    input.style.opacity = 1
    input.style.backdropFilter = 'blur(5px)'
})
input.addEventListener('blur'  , event => {
    input.style.opacity = .3
    input.style.backdropFilter = 'blur(0px)'
})

window.addEventListener('load', function() {
    initialize_Peer()

    const form = document.createElement('form')
    document.body.append(form)
    form.append(input)
    form.setAttribute('id', 'connect')
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        if (input.value === '') return
        add_connection(input.value)
    })

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
            console.log('Receive', data)
            console.log('Receive', String(data))
            console.log('from:', connection.peer)
        })
    })
}

function add_connection(connection_id) {
    const hash = cyrb53('KTechi.github.com', 0)

    // Reset peer with new ID
    if (connection_id.split(' ')[0] == 'me') {
        peer = new Peer(hash+''+connection_id.split(' ')[1])
        initialize_Peer()
        return
    }

    // Connect
    const connection = peer.connect(hash+''+connection_id)
    connection.on('open', function() {
        connections.push(connection)
        document.getElementById('state').innerText = connection.peer
        console.log('Connect with [' + connection.peer + ']')
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