const express = require('express')
const app = express();
const server = require('../api/server.js');
const dotenv = require('dotenv');

dotenv.config()


server.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})
module.exports = app;
