const {StatusCodes} = require('http-status-codes');

function pingProblemController(req,res){
  return res.json({message:'Ping controller is running...'})
}

function addProblem(req,res){
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    msg:'Not implemented'
  })
}

function getProblem(req,res){
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    msg:'Not implemented'
  })
}

function getProblems(req,res){
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    msg:'Not implemented'
  })
}

function deleteProblem(req,res){
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    msg:'Not implemented'
  })
}

function updateProblem(req,res){
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    msg:'Not implemented'
  })
}

module.exports={
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem
}