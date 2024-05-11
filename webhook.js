const express = require('express')
const app = express()
const fs = require('fs')
const https = require('https')
const config = require('config')
const port = config.get('server.port')
const cts = {
    cert: fs.readFileSync(config.get('cert.fullchainPath')),
    key: fs.readFileSync(config.get('cert.privKeyPath'))
}

app.post('/webhook', (req, res) => {
    console.log('triggered branch: ' + req.body.ref)
    console.log('...')
    console.log(req.body)
    res.send('Ok')
})


https.createServer(cts, app).listen(port);