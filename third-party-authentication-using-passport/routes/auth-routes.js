const router = require('express').Router();
const passport = require('passport')


router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

router.get('/logout', (req, res) => {
    res.send('loggin out')
})

// callback route for redirect route

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send("reached callback URL")
})

module.exports = router;