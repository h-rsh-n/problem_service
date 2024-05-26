const NotImplemented = require('./notimplemented.error');
const NotFound = require('./notfound.error');
const BadRequest = require('./badrequest.error');
const InternalServerError = require('./internalServer.error')

module.exports = {
  NotFound,
  NotImplemented,
  BadRequest,
  InternalServerError
}