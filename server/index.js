//imports
const express = require('express')

const { json } = require('body-parser')

//socket.io imports
const http = require('http')
const socketIo = require('socket.io')
// const port = process.env.SERVER_PORT || 5050

//destructuring

const app = express()
//socket.io constants
const server = http.createServer(app)
const io = socketIo(server)

app.use(json())

//socket.io listeners
io.on('connection', socket => {
    console.log('a user connected'),
        socket.emit('punkass', { greeting: 'hello punkass' })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('room', function(data) {
        socket.join(data.room)
    })
    socket.on('leave', data => {
        socket.leave(data.room)
    })
    socket.on('coding', data => {
        console.log('socket hears the coding event')
        socket.broadcast.emit('receive', data)
        // socket.to(data.room).emit("receive", data)
        // socket.emit("receive", data)
    })
})

//server listening
server.listen(5050, () => {
    console.log(`listening on port 5050`)
})
