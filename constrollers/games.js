const express = require("express")
const Game = require('../models/game')

const router = express.Router()

//Seed
router.get('/seed', (req,res) => {
    const starterGames = [
        { name: "Game 1", description: "Game 1", img: "https://media.istockphoto.com/photos/text-game-time-spelled-out-in-wooden-letter-surrounded-by-dice-other-picture-id1306464121?b=1&k=20&m=1306464121&s=170667a&w=0&h=ZTxUnnccu9u86lWO9TosJ_M13rp9vDHDBwXU6v-jAb0=", price: 12, qty: 10, reviews: ['Some Review', 'Another Review'] },
        { name: "Game 2", description: "Game 2", img: "https://media.istockphoto.com/photos/text-game-time-spelled-out-in-wooden-letter-surrounded-by-dice-other-picture-id1306464121?b=1&k=20&m=1306464121&s=170667a&w=0&h=ZTxUnnccu9u86lWO9TosJ_M13rp9vDHDBwXU6v-jAb0=", price: 12, qty: 10, reviews: ['Some Review'] },
        { name: "Game 3", description: "Game 3", img: "https://media.istockphoto.com/photos/text-game-time-spelled-out-in-wooden-letter-surrounded-by-dice-other-picture-id1306464121?b=1&k=20&m=1306464121&s=170667a&w=0&h=ZTxUnnccu9u86lWO9TosJ_M13rp9vDHDBwXU6v-jAb0=", price: 12, qty: 10, reviews: ['A somewhat longer review just to see what will happen if the string is long. Random words here bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla '] },
        { name: "Game 4", description: "Game 4", img: "https://media.istockphoto.com/photos/text-game-time-spelled-out-in-wooden-letter-surrounded-by-dice-other-picture-id1306464121?b=1&k=20&m=1306464121&s=170667a&w=0&h=ZTxUnnccu9u86lWO9TosJ_M13rp9vDHDBwXU6v-jAb0=", price: 12, qty: 10, reviews: ['Some Review'] },
        { name: "Game 5", description: "Game 5", img: "https://media.istockphoto.com/photos/text-game-time-spelled-out-in-wooden-letter-surrounded-by-dice-other-picture-id1306464121?b=1&k=20&m=1306464121&s=170667a&w=0&h=ZTxUnnccu9u86lWO9TosJ_M13rp9vDHDBwXU6v-jAb0=", price: 12, qty: 10, reviews: ['Some Review', 'Review 2,', 'Review 3'] },
    ]

    Game.deleteMany({}).then((data) => {
        Game.create(starterGames).then((data) => {
            res.json(data)
        })
    }).catch((err) => {
        res.status(400).send(err)
    })
})

// Index
router.get('/', (req, res) => {
    Game.find({})
        .then((games) => {
            res.render('games/Index', {games})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})

// New
router.get('/:id/new', (req, res) => {
    Game.findById(req.params.id)
        .then((game) => {
            res.render('games/New', {game})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})

// Delete


// Update


// Create
router.post('/:id', (req,res) => {
    Game.findById(req.params.id)
        .then((foundGame) => {
            console.log(`Found Game is ${foundGame}`)
            console.log(`old reviews are ${foundGame.reviews}`)
            console.log(`New review is ${req.body.reviews}`)
            // spread operator - copies the array
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            foundGame.reviews = [...foundGame.reviews, req.body.reviews]
            //Saves the update
            foundGame.save()
        })
        .then(() => {
            res.redirect(`/games`)
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})

// Edit


// Show
router.get('/:id', (req,res) => {
    const {id} = req.params
    Game.findById(id)
        .then((game) =>{
            res.render('games/Show', {game})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})
    


module.exports = router