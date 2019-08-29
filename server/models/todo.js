
const mongoose = require('mongoose')
const Schema   = mongoose.Schema; 

var TodoSchema = new Schema({
    text_todo:      {type:String, required:true},
    complete_todo:  {type:Boolean, required: true},
    create_todo:    {type:Date, default:Date.now() }

},{collection:"todos"});

module.exports = mongoose.model('Todo', TodoSchema);