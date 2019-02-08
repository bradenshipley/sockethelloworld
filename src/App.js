import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import './App.css'

class App extends Component {
    componentDidMount() {
        const { endpoint } = 'http://localhost:5050'
        const socket = socketIOClient(endpoint)
        // socket.emit('room', {
        //     room: 1
        // })
        socket.on('punkass', res => console.log(res))
    }
    render() {
        return <div> This is some stuff</div>
    }
}

export default App
