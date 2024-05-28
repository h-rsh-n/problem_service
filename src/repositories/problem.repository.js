const { NotFound } = require('../errors');
const {Problem} = require('../models')

class ProblemRepository{
  async createProblem(problemData){
      const problem = await Problem.create({
        title:problemData.title,
        description:problemData.description,
        testCases:(problemData.testCases)?problemData.testCases:[]
      })
      return problem;
  }

  async getProblem(problemId){
      const problem = await Problem.findById(problemId);
      return problem;
  }
}

module.exports = ProblemRepository;