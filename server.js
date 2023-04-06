/**const express = require('express');
const Web3 = require('web3');
const app = express();



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

// serving the index.html file 

const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`port: ${portNumber}`);
// can see the port number in terminal - you can dictate the port number

**/

const express = require("express");
const Web3 = require("web3");
const app = express();
const path = require("path");
//const web3 = new Web3("https://mainnet.infura.io/v3/shoppe");
//const mainnet_infura =
//("https://mainnet.infura.io/v3/1c16ba64e3ff44ac8394b990f027cdd1");
//const web3 = new web3("miannet_infura");
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/v3/1c16ba64e3ff44ac8394b990f027cdd1"
  )
);

// Serve static files from the public folder
https: app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// serving the index.html file

const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`port: ${portNumber}`);
