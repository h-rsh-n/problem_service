const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class NotFound extends BaseError{
  constructor(methodName,requestObject){
    super(`Not-Found`,StatusCodes.NOT_FOUND,`Resource requested by ${methodName} not found`,`${requestObject} not found`)
  }
}

module.exports = NotFound;