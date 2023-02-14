const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')

passport.use(
    new googleStrategy({
        //option for google strategy

    }), () => {
        //passport callback function
    }
)