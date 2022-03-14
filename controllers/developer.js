////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require('express')
const User = require('../models/user')
const Game = require('../models/game')


/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router =  express.Router()


/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// Index
router.get('/', (req, res) => {
    Game.find({})
        .then((games) => {
            res.render('developer/Index', {games})
        })
})


// New



// Delete



// Update



// Create



// Edit



// Show


module.exports = router