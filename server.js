require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload= require('express-fileupload')
const cookieParser = require("cookie-parser");

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
  useTempFiles:true
}))
app.use('/user', require('./routers/userRouter'))
app.use('/api', require('./routers/categoryRouter'))
// connect to mongodb
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then((res) => {
  console.log('Connected to DB')
})
.catch((error) => {
  console.log(error);
});


app.get('/', (req,res)=>{
  res.json({msg:'Welcome to the e-commerce world!'})
})

const PORT = process.env.PORT || 3000

const server = app.listen(PORT , ()=>{
  console.log('server is up and running', PORT)
})

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please use a different port.`);
  } else {
    console.error('An error occurred:', err);
  }
});