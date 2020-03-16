const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  author_Name: {
    type: String
  },
  author_Genres: {
    type: String,
  },
  author_Genres: {
    type: Array,
  },
  author_Country: {
    type: String,
  },
  author_eBooks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'eBooks'
  }],
})

const authorModel = mongoose.model('author', authorSchema)
module.exports = authorModel