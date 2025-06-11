const express = require('express');
const cors = require('cors');
const app = express()
require('dotenv').config()
const cookieParser = require('cookie-parser')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')
const userdetailsRoute = require('./routes/userdetailsRoute')
const paymentRoute = require('./routes/paymentRoute')
const AddProductsRoute = require('./adminroutes/addproductsRoutes')
const GetProductsRoute = require('./adminroutes/getproductsRouter')
const AddNgoProductRoute = require('./ngoroutes/addproductsRoute')
const GetNgoPRoductRoute = require('./ngoroutes/getproductRoute')
const DonateNgoProductRoute = require('./ngoroutes/donateproductsRoute')
const DeleteAllProductsRoute = require('./ngoroutes/deleteproductsRoute')
const GetNgoListRoute = require('./ngoroutes/ngolistRoute')
const GetAllUsers = require("./adminroutes/getusersRoute")
const GetWeatherDataRoute = require('./routes/getweatherdataRoute')
const SOSTriggerRoute = require("./routes/sostriggerRoute")
const sosInfoRoute = require('./adminroutes/getsosinfoRoute')
const RiskDataRoute = require("./adminroutes/riskdataRoute")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/user', registerRoute)
app.use('/user', loginRoute)
app.use('/user', userdetailsRoute)
app.use('/payment',paymentRoute)
app.use('/user',GetWeatherDataRoute)
app.use('/user',SOSTriggerRoute)

app.use('/admin',AddProductsRoute)
app.use('/admin',GetProductsRoute)
app.use('/admin',GetAllUsers)
app.use('/admin',sosInfoRoute)
app.use('/admin',RiskDataRoute)


app.use('/ngo',AddNgoProductRoute)
app.use('/ngo',GetNgoPRoductRoute)
app.use('/ngo',DonateNgoProductRoute)
app.use('/ngo',DeleteAllProductsRoute)
app.use('/ngo',GetNgoListRoute)


app.listen((process.env.PORT || 5000), () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);

});