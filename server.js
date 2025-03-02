const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
// const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.get("/", (req,res) => {

    res.send('Hello Pan');
})

app.listen(port, ()=>{
    // console.log("Listening on port %d",port);
    // console.log("Listening on port" + port);
    debug("Listening on port" + port);
})