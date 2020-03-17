const EBooksModel = require('../models/eBooks.model')
const AuthorModel = require("../models/author.model")
const { handleError } = require('../utils')



function getSearch(req, res) {
  EBooksModel
  AuthorModel
  const type_books = req.body.type_books
  const type_authors = req.body.type_authors
  const searchBy = req.body.searchBy
  EBooksModel.find({ [type_books]: searchBy })
    .then(books => {
      AuthorModel.find({ [type_authors]: searchBy })
        .then(authors => {
          res.json({
            books,
            authors,
          })
        })
        .catch((err) => handleError(err, res))
    })
    .catch((err) => handleError(err, res))
}



module.exports = {
  getSearch
}