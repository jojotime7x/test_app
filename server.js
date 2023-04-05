const express = require('express');
const Web3 = require('web3');
const app = express();
const path = require('path');



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

// serving the index.html file 

const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`port: ${portNumber}`);
// can see the port number in terminal - you can dictate the port number