const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({
  categoryName: {
    type: String,
    trim: true,
    required: true
  },
  categoryDetails: {
    type: String,
    trim: true,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('category', categorySchema);