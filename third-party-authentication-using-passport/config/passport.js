const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')
const keys = require('./keys')

passport.use(
    new googleStrategy({
        //option for google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret

    }, (accessToken, refreshToken, profile, done) => {
        //passport callback function
        console.log("yoo i am here to help")
        console.log(profile)
    })
)