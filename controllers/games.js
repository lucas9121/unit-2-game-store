const express = require("express")
const Game = require('../models/game')
const Review = require('../models/review')
const User = require('../models/user')

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

router.use((req, res, next) => {
    if(req.session.loggedIn) {
        User.findOne({username: req.session.username})
            .then((user) => {
                req.session.cart = user.cart.length
                console.log('game controller middleware!!!!!!!!!!!!')
                console.log(req.session.cart)
            })
        next()
    } else {
        res.redirect('/user/login')
    }
})

// Index
router.get('/', (req, res) => {
    username = req.session.username
    Game.find({})
        .then((games) => {
            res.render('games/Index', {games, username, length: req.session.cart})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})


// New Review
router.get('/:id/new', (req, res) => {
    username = req.session.username
    Game.findById(req.params.id)
        .then((game) => {
            res.render('games/New', {game, username, length: req.session.cart})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})

// Delete


// Update



// Create Review
router.post('/:id', (req,res) => {
    username = req.session.username
    Game.findById(req.params.id)
        .then((game) => {
            Review.create(req.body)
                .then((review) => {
                    review.name = req.session.username
                     // spread operator - copies the array
                     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
                    game.reviews = [...game.reviews, review]
                    //Saves the update
                    game.save()
                    res.redirect(`/games/${req.params.id}`)
                })
                .catch((error) => {
                    res.status(400).json(error)
                })
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})


// Edit


// Show
router.get('/:id', (req,res) => {
    const {id} = req.params
    username = req.session.username
    Game.findById(id)
        .then((game) =>{
            res.render('games/Show', {game, username, length: req.session.cart})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})

// Add to Cart
router.post('/cart/:id', (req, res) => {
    Game.findById(req.params.id)
        .then((game) => {
            User.findOne({username: req.session.username})
                .then((user) => {
                    let oldGame = user.cart.find(obj => obj.name === game.name)
                    if(!oldGame){
                        oldGame = game
                        oldGame.qty = 1
                        user.cart = [...user.cart, oldGame]
                        user.save()
                    } else {
                        let gameIndex = user.cart.indexOf(oldGame)
                        oldGame.qty ++
                        oldGame.price = game.price * oldGame.qty
                        user.cart.splice(gameIndex, 1, oldGame)
                        user.save()
                    }
                    res.redirect('/games')
                })
                .catch((error) => {
                    res.status(400).json(error)
                })
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})




module.exports = router