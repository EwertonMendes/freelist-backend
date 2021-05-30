const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

app.use(express.json())

// Add headers
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.listen(3000, () => console.log(
`**************************************
* SERVER RUNNING - FREE LIST         *
**************************************
`))