////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const Game = require('../models/game')


/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router =  express.Router()


/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// The Signup Routes (Get => form, post => submit form)
router.get('/signup', (req, res) => {
    res.render('user/Signup.jsx')
})

router.post('/signup', async (req, res) => {
    // encrypt password
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )
    // create the new user
    User.create(req.body)
        .then((user) => {
            //redirect to login page
            res.redirect('/user/login')
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})

// The login Routes (Get => form, post => submit form)
router.get('/login', (req, res) => {
    res.render('user/Login.jsx')
})

router.post('/login', async (req, res) => {
    // get the data from the request body
    const {username, password} = req.body
    // search for the user
    User.findOne({username})
        .then(async (user) => {
            // check if user exists
            if(user) {
                // compare password
                const result = await bcrypt.compare(password, user.password)
                if(result) {
                    // store some properties in the session object
                    req.session.username = username
                    req.session.loggedIn = true
                    if(user.accountType === 'gamer'){
                        // redirect to games page if sucessful
                        res.redirect('/games')
                    } else if(user.accountType === 'developer') {
                        res.redirect('/dev')
                    }
                } else {
                    //error if password doesn't match
                    res.json({error: 'Password doesn\'t match'})
                }
            } else {
                // send error if user doesn't exist
                res.jason({error: "user doesn't exist"})
            }
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})

router.get('/logout', (req, res) => {
    // destroy session and redirect to main page
    req.session.destroy((err) => {
        res.redirect('/games')
    })
})

router.get('/default', (req,res) => {
    User.find({})
        .then((user) => {
            res.render('Default', {user})
        })
})

// Cart
router.get('/cart/:username', (req, res) => {
    User.findOne({username: req.params.username})
        .then((user) => {
            !user ? res.redirect('/') :
            res.render('user/Cart', {user})
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})

// Buy Cart Game
router.post('/cart/:username/:gameName', (req, res) => {
    User.findOne({username: req.params.username})
        .then((user) => {
            let cartGame = user.cart.find(obj => obj.name === req.params.gameName)
            let gameIndex = user.cart.indexOf(cartGame)
            Game.findOne({name: cartGame.name})
                .then((foundGame) => {
                    if(foundGame.qty > 0 && foundGame.qty >= cartGame.qty){
                        foundGame.qty -= cartGame.qty
                        user.cart.splice(gameIndex, 1)
                        user.save()
                        foundGame.save()
                        console.log(foundGame)
                        res.redirect('/games')
                    }
                })
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})

// Delete Cart Game
router.post('/cart/:username/:gameName', (req, res) => {
    User.findOne({username: req.params.username})
        .then((user) => {
            let game = user.cart.find(obj => obj.name === req.params.gameName)
            let gameIndex = user.cart.indexOf(game)
            user.cart.splice(gameIndex, 1)
            user.save()
            if(user.cart.length > 0){
                res.redirect(`back`)
            } else {
                res.redirect('/games')
            }
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})

// My Account
router.get('/:username', (req, res) => {
    User.findOne({username: req.params.username})
        .then((user) => {
            res.render('user/Info', {user})
        })
        .catch((error) => {
            res.json(error)
        })
})



//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router