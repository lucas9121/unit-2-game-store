////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')


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
            console.log(error)
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
                    // redirect to games page if sucessful
                    res.redirect('/games')
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
            console.log(error)
            res.status(400).json(error)
        })
})

router.get('/logout', (req, res) => {
    // destroy session and redirect to main page
    req.session.destroy((err) => {
        res.redirect('/')
    })
})


//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router