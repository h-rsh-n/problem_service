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

  async getProblems(){
    const problems = await Problem.find({});
    return problems;
  }

  async deleteProblem(deleteId){
    const deleteproblem = await Problem.findByIdAndDelete(deleteId);
    console.log(deleteproblem)
    return deleteproblem;
  }

  async updateProblem(updateId,updateData){
    const updateproblem = await Problem.findByIdAndUpdate(updateId,updateData,{new:true});
    return updateproblem;
  }
}

module.exports = ProblemRepository;