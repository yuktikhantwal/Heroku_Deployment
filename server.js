var sslRootCAs = require('ssl-root-cas/latest')
sslRootCAs.inject()

const express = require('express')
const path = require('path')

const SERVER_PORT = process.env.PORT || 3333

const app = express()

app.use('/public',express.static(path.join(__dirname+'/public')))

app.get('/', (req,res)=>{
    res.send("Hello from the backend")
})

app.listen(SERVER_PORT,()=>{
    console.log("Server started")    
})