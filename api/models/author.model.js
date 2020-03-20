const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  author_Name: {
    type: String
  },
  author_Genres: {
    type: Array,
  },
  author_Country: {
    type: String,
  },
})

const authorModel = mongoose.model('author', authorSchema)
module.exports = authorModel











