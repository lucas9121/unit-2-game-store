////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require('express')
const Game = require('../models/game')
const User = require('../models/user')


/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router =  express.Router()


/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// Index
router.get('/', (req, res) => {
    username = req.session.username
    User.findOne({username})
        .then((user) => {
        })
    Game.find({dev: username})
        .then((games) => {
            res.render('developer/Index', {games, username})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})


// New
router.get('/new', (req, res) => {
    username = req.session.username
    res.render('developer/New', {username})
})


// Delete
router.delete('/:id', (req, res) => {
    Game.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/dev')
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})


// Update
router.put('/:id', (req, res) => {
    Game.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((game) => {
        res.redirect(`/dev/${req.params.id}`)
    })
    .catch((error) => {
        res.status(400).json(error)
    })
})


// Create
router.post('/', (req, res) => {
    Game.create(req.body)
        .then((game) => {
            game.dev = req.session.username
            game.qty = 10
            game.save()
            res.render('developer/Show', {game})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})


// Edit
router.get('/:id/edit', (req, res) => {
    username = req.session.username
    Game.findById(req.params.id)
        .then((game) => {
            res.render('developer/Edit', {game, username})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})


// Show
router.get('/:id', (req, res) => {
    username = req.session.username
    Game.findById(req.params.id)
        .then((game) => {
            res.render('developer/Show', {game, username})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})


// My Account
router.get('/account/:username', (req, res) => {
    User.findOne({username: req.session.username})
        .then((user) => {
            res.render('developer/Info', {user})
        })
        .catch((error) => {
            res.status(400).res.json(error)
        })
})

module.exports = router