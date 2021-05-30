const mongoose = require('mongoose')

const listItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
    createdDateTime: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('ListItem', listItemSchema)

