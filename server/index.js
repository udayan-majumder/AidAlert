const express = require('express');
const cors = require('cors');
const app = express()
require('dotenv').config()
const cookieParser = require('cookie-parser')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')
const userdetailsRoute = require('./routes/userdetailsRoute')
const paymentRoute = require('./routes/paymentRoute')
app.use(cors({
    origin:`${process.env.FRONTEND_URL}`,
    methods:['GET','POST'],
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/user', registerRoute)
app.use('/user', loginRoute)
app.use('/user', userdetailsRoute)
app.use('/payment',paymentRoute)

app.listen((process.env.PORT || 5000), () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);

});