const express = require("express")
const Game = require('../models/game')
const Review = require('../models/review')

const router = express.Router()

// Index
router.get('/', (req, res) => {
    username = req.session.username
    Game.find({})
        .then((games) => {
            res.render('Home', {games})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})

// Show
router.get('/:id', (req, res) => {
    Game.findById(req.params.id)
        .then((game) => {
            res.render('Sub', {game})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})

module.exports = router