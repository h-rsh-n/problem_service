const mongoose = require('mongoose');
const { ATLAS_DB_URL,NODE_ENV } = require('./server.config');
const logger = require('./logger.config');

async function connectToDB(){
  try {
    if(NODE_ENV == 'development'){
      await mongoose.connect(ATLAS_DB_URL);
      console.log('Connection to DB successful');
    }
  } catch (error) {
    console.log('unable to connect')
    logger.error('Unable to connect to DB')
    //console.log(error)
  }
}

module.exports = connectToDB