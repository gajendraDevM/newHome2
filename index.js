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




dotenv.config()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }


  mongoose.connect('mongodb+srv://gajendra:gajahsn94@cluster0.v3e8e.mongodb.net/newhome?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
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
   app.use('/api', client)
   app.use('/api', employee)




const port = 5000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})