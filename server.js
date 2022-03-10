require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const gameController = require('./constrollers/games')
const path = require('path')

const app = express()
app.engine('jsx', require('express-react-views').createEngine())
app.set('view engine', 'jsx')

app.use(morgan('tiny'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))

app.use('/games', gameController)

app.get('/', (req, res) => {
    res.send('Server is working')
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`listneing on port ${PORT}`)
})
