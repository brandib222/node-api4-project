const express = require('express')

// add in router files

const server = express()

server.use(express.json())

// server.use(router files)

server.get('/', (req, res) => {
    res.send(`<h1>This is the thing that you made! Wooooo! </h1>`)
})


// export the dang thing
module.exports = server;