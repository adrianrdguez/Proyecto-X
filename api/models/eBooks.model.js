const mongoose = require('mongoose')

const eBooksSchema = new mongoose.Schema({
  eBook_Name: {
    type: String
  },
  eBook_Editorial: {
    type: String,
  },
  eBook_Genres: {
    type: String,
  },
  eBook_Price: {
    type: Number,
  },
  eBook_Author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'author'
  },
})

const eBooksModel = mongoose.model('eBooks', eBooksSchema)
module.exports = eBooksModel

