const express = require('express')
const app = express()
const path = require('path')
const RSTP = require('./helpers/DiscoveryRSTP')
const stream = require('./helpers/connectCam')

app.use(express.static(path.join(__dirname, 'public')))

stream.connectCam()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

const port = 3000

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
    console.log('Break Server CTRL + C')
})