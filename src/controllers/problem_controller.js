const {NotImplemented} = require('../errors')
const {ProblemService} = require('../service')
const {ProblemRepository} = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req,res){
  return res.json({message:'Ping controller is running...'})
}

async function addProblem(req,res,next){
  try {
    const newproblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success:true,
      message:"Successfully created a new problem",
      error:{},
      data:newproblem
    })
  } catch (error) {
    next(error)
  }
}

function getProblem(req,res,next){
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    msg:'Not implemented'
  })
}

function getProblems(req,res,next){
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    msg:'Not implemented'
  })
}

function deleteProblem(req,res,next){
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    msg:'Not implemented'
  })
}

function updateProblem(req,res,next){
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