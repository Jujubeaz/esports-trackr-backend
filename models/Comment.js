const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = mongoose.Schema({
  body:{
    type: String,
    require: [true, 'You cannot post an empty comment']
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  match:{
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;