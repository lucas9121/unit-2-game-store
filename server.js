/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const gameController = require('./controllers/games')
const userRouter = require('./controllers/user')
const devController = require('./controllers/developer')
const homeController = require('./controllers/home')
const path = require('path')
const session = require('express-session')
const MongoStore = require('connect-mongo')


/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app = express()
app.engine('jsx', require('express-react-views').createEngine())
app.set('view engine', 'jsx')


/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
// middleware to setup session
app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
        saveUninitialized: true,
        resave: false,
    })
)


////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.use('/games', gameController)
app.use('/user', userRouter)
app.use('/dev', devController)
app.use('/home', homeController)

app.get('/', (req, res) => {
    res.redirect('/home')
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`listneing on port ${PORT}`)
})
