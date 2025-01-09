const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true,'title cannot be empty'],
  },
  description:{
    type:String,
    required:[true,'Description cannot be empty']
  },
  difficulty:{
    type:String,
    enum:['easy','medium','hard'],
    required:[true,'Difficulty cannot be empty'],
    default:'easy'
  },
  testCases:[
    {
      input:{
        type:String,
        required:true
      },
      output:{
        type:String,
        required:true
      }
    }
  ],
  codeStubs: [
    {
      language:{
        type:String,
        enum:["PYTHON","JAVA","CPP"],
        required:true
      },
      startSnippet:{
        type:String
      },
      endSnippet:{
        type:String
      },
      userSnippet:{
        type:String
      }
    }
  ],
  editorial:{
    type:String
  }

});

const Problem =  mongoose.model('Problem',problemSchema);
module.exports = Problem;