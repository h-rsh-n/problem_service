const {Problem} = require('../models')

class ProblemRepository{
  async createProblem(problemData){
    try {
      //console.log(Problem)
      const problem = await Problem.create({
        title:problemData.title,
        description:problemData.description,
        testCases:(problemData.testCases)?problemData.testCases:[],
      })
      //console.log('Repo',problem)
      return problem;
    } catch (error) {
      console.log("error in repo layer",error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;