require('dotenv').config()
const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
.on('open', () => console.log('Mongoose connection open'))
.on('close', () => console.log('Mongoose connection closed'))
.on('error', (error) => console.log(error))

module.exports = mongoose