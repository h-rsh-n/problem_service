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

  async deleteProblem(deletedId){
    const deleteproblem = await this.problemRepository.deleteProblem(deletedId);
    return deleteproblem;
  }

  async updateProblem(updateId,updateData){
    const updateproblem = await this.problemRepository.updateProblem(updateId,updateData);
    return updateproblem;
  }
}

module.exports = ProblemService;