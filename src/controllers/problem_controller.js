const {NotFound} = require('../errors')
const {ProblemService} = require('../service')
const {ProblemRepository} = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const logger = require('../config/logger.config');

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

async function getProblem(req,res,next){
  try {
    const problem = await problemService.getProblem(req.params.id);
    if(!problem){
      logger.error(`Problem with id:${req.params.id} not found`)
      throw new NotFound('Problem',req.params.id)
    }
    return res.status(StatusCodes.OK).json({
      success:true,
      message:`Successfully retrieved the problem with id:${req.params.id}`,
      error:{},
      data:problem
    })
  } catch (error) {
    next(error)
  }
}

async function getProblems(req,res,next){
  try {
    const problems = await problemService.getProblems();
    return res.status(StatusCodes.OK).json({
      success:true,
      message:`Successfully fetched all the problems`,
      error:{},
      data:problems
    })
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req,res,next){
  try {
    const deleteproblem = await problemService.deleteProblem(req.params.id);
    console.log('controller',deleteproblem)
    if(!deleteproblem){
      logger.error(`Problem with id:${req.params.id} not found`)
      throw new NotFound('Problem',req.params.id);
    }
    return res.status(StatusCodes.OK).json({
      success:true,
      message:`Problem with id:${req.params.id} deleted successfully`,
      error:{},
      data:deleteproblem
    })
  } catch (error) {
    next(error);
  }
}

async function updateProblem(req,res,next){
  try {
    const updateproblem = await problemService.updateProblem(req.params.id,req.body);
    if(!updateproblem){
      logger.error(`Problem with id:${req.params.id} not found`)
      throw new NotFound('Problem',req.params.id);
    }
    return res.status(StatusCodes.OK).json({
      success:true,
      message:`Problem with id:${req.params.id} updated successfully`,
      error:{},
      data:updateproblem
    })
  } catch (error) {
    next(error)
  }
}

module.exports={
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem
}