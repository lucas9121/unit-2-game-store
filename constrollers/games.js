const express = require("express")
const Game = require('../models/game')

const router = express.Router()

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
    


module.exports = router