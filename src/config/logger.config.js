const winston = require('winston');
const {ATLAS_DB_URL} = require('./server.config')
require('winston-mongodb');

const allowedTransports = [];

//logs onto the console
allowedTransports.push(new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),
    //Second argument defines the printf()
    winston.format.printf((log)=>{
      return `${log.timestamp} [${log.level}]: ${log.message}`
    })
  )
}))

//logs are pushed to a mongo_database
allowedTransports.push(new winston.transports.MongoDB({
  level:'error',
  db:ATLAS_DB_URL,
  collection:'logs',
  options: {
    useUnifiedTopology: true
  }
}));

const logger = winston.createLogger({
  format:winston.format.combine(
    //first argument to combine method is defining how we want the timestamp to come up
    winston.format.timestamp({
      format:'YYYY-MM-DD HH:mm:ss'
    }),
  ),
  transports: allowedTransports
})

module.exports = logger;