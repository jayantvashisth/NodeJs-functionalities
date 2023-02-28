const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport')


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});