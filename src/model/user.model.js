const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: 'true',
    trim: true,
    min: [4, 'Minimum 4 charecters'],
  }, 
  email: {
    type: String,
    require: true,
    unique: 'true',
    trim: true,
  },
  avatar: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    require: true,
    min: [8, 'Minimum 8 charecters'],
    max: [20, 'Maximum 20 charecters']
  },
  lastLogin: {
    type: String,
  }
})

module.exports = mongoose.model('user', userSchema)