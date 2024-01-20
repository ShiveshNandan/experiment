const express = require('express')
const mongoose = require('mongoose');
const routes = require('./routes/couseRoutes');
const cors = require('cors')
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.port || 5000;


const mongooseURL ="mongodb+srv://kshivesh929:I8KpYqCes6z0cHcN@cluster0.0baltkl.mongodb.net/?retryWrites=true&w=majority"

mongoose
.connect(mongooseURL)
.then(() => console.log("mongoDB connected"))
.catch((err)=> console.log("hui",err))



app.use(routes);

app.listen(PORT , () => {
    console.log("port start")
})
