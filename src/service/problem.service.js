const {sanitizeMarkdown} = require("../utils")

class ProblemService{

  constructor(problemRepository){
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData){
    //md can cantain html, can cantain malicious code
    try {
      //console.log("service",problemData)
      problemData.description = sanitizeMarkdown(problemData.description);
      const problem = await this.problemRepository.createProblem(problemData);
      //console.log(problem)
      return problem;
    } catch (error) {
      console.log("error in service layer",error)
      throw error
    }
  }
}

module.exports = ProblemService;