////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require('express')
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
    Game.find({dev: req.session.username})
        .then((games) => {
            res.render('developer/Index', {games})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})


// New
router.get('/new', (req, res) => {
    res.render('developer/New')
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
    .then(() => {
        res.redirect(`/dev/${req.params}`)
    })
    .catch((error) => {
        res.status(400).json(error)
    })
})


// Create
router.post('/', (req, res) => {
    Game.create(req.body)
        .then((game) => {
            res.render('developer/Show', {game})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})


// Edit
router.get('/:id/edit', (req, res) => {
    Game.findById(req.params.id)
        .then((game) => {
            res.render('developer/Edit', {game})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})


// Show
router.get('/:id', (req, res) => {
    Game.findById(req.params.id)
        .then((game) => {
            res.render('developer/Show', {game})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})

module.exports = router