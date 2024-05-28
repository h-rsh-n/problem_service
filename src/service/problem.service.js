const {sanitizeMarkdown} = require("../utils")

class ProblemService{

  constructor(problemRepository){
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData){
    //md can cantain html, can cantain malicious code
    problemData.description = sanitizeMarkdown(problemData.description);
    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
  }

  async getProblem(problemId){
    const problem = await this.problemRepository.getProblem(problemId);
    return problem;
  }

  async getProblems(){
    const problems = await this.problemRepository.getProblems();
    return problems;
  }
}

module.exports = ProblemService;