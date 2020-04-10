const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    minlength:2
  },
  firstname:{
    type:String,
    required:true,
    trim:true,
  },
  lastname:{
    type:String,
    required:true,
    trim:true,
  },
  businessname:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
