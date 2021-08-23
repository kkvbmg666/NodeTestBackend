require('dotenv').config()
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts') 
const indexRouter = require('./routes/index')

app.set('view engine','ejs')
app.set('views', __dirname + '/views')
app.set('layout','layouts/layout')

app.use(express.static('public'))
app.use(expressLayouts)
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
 
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (error)=>console.error(error))
db.once('open', ()=>console.error("Connected to DB"))

app.use('/',indexRouter)


app.listen(process.env.PORT || 5555, ()=>{
    console.log("Server Started on port "+process.env.PORT);
});



