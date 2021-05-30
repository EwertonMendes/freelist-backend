const express = require('express')
const app = express()
const dotenv = require('dotenv')
const databaseStart = require('./config/databaseConfig')
const methodOverride = require('method-override')

//Import Routes
const listItemRoute = require('./routes/listItem')

const PORT = process.env.PORT;

dotenv.config()

//Connect to DB
databaseStart()

//Middlewares
app.use(express.json())

// Add headers
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(methodOverride('_method'))



//Route Middlewares
app.use('/api/listItem', listItemRoute)

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason, 'stack:', reason.stack);
});

app.listen(PORT, () => console.log(
    `**************************************
* SERVER RUNNING - FREE LIST         *
**************************************
`))