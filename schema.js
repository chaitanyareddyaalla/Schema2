const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  commentedAt: {
    type: Date,
    default: Date.now,
  },
});

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      minlength: 50,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      default: 'General',
      trim: true,
    },
    likes: {
      type: [String], // Array of user IDs or usernames who liked the post
      default: [],
    },
    comments: {
      type: [commentSchema],
      default: [],
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt'
  }
);

module.exports = mongoose.model('BlogPost', blogPostSchema);
