const express = require('express');
const connectToMongo = require('./db');
var cors = require('cors')


connectToMongo();
const app = express()
const port = 5000;


app.use(cors())
app.use(express.json())

app.use('/api',require('./Routes/event'))

    
app.get('/',(req,res)=>{
    res.status(500).send("hi there")
    console.log(`listening to ${port}`)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
