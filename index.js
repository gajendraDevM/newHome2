const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv =  require('dotenv')
const morgan = require('morgan');
const cors = require('cors')
const cookieSession = require('cookie-session');
const admin = require('./server/router/admin')
const client = require('./server/router/client')
const employee = require('./server/router/employee')
const property = require('./server/router/property')
const settingproperty = require('./server/router/settingProperty')
const setting = require('./server/router/setting')
const locality = require('./server/router/locality')




dotenv.config()

if (process.env.NODE_ENV === process.env.NODE_ENV) {
    app.use(morgan('dev'))
  }


  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
    console.log('mongodb connected sucessfully')
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[process.env.COOKEY_KEY] 
   }))


   app.use('/api', admin)
   app.use('/api', locality )

   app.use('/api', client)
   app.use('/api', employee)
   app.use('/api', property)
   app.use('/api', settingproperty)
   app.use('/api', setting)



app.listen(process.env.PORT, () => {
  console.log(`success`)
})