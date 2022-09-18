const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'you need to post something',
      minlength: 1,
      maxlength: 1000
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

commentSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Post = model('Post', postSchema);

module.exports = Post;
