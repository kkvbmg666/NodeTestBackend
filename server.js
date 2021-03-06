require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (error)=>console.error(error))
db.once('open', ()=>console.error("Connected to DB"))

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers',subscribersRouter)


app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server Started on port "+process.env.PORT);
});



