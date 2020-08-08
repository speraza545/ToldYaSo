'use strict'

const mongoose = require('mongoose')
const User = require('./user')

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  owner:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  owner:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [commentSchema]
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
