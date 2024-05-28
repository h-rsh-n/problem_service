const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/ds.config');
const logger = require('./config/logger.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

app.use('/api',apiRouter);
//ping check

app.get('/ping',(req,res)=>{
  return res.json({message:`problem service is alive`})
})

//last middleware if any error appears
app.use(errorHandler)

app.listen(PORT,async ()=>{
    console.log(`Server started at:${PORT}`);
    await connectToDB();
})