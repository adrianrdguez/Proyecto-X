const AuthorModel = require('../models/author.model')
const { handleError } = require('../utils')

function getAllAuthor(req, res) {
  AuthorModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

const createAuthor = (req, res) => {
  AuthorModel.create(req.body)
    .then(eBook => {
      console.log(eBook)
      res.json(eBook)
    })
    .catch((err) => handleError(err, res))
}

function getAuthorById(req, res) {
  AuthorModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}


function deleteAuthorById(req, res) {
  AuthorModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}


module.exports = {
  getAllAuthor,
  createAuthor,
  getAuthorById,
  deleteAuthorById
}