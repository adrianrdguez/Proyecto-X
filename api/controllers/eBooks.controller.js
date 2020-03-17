const EBooksModel = require('../models/eBooks.model')
const { handleError } = require('../utils')

function getAllEBooks(req, res) {
  EBooksModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
const createEBook = (req, res) => {
  EBooksModel.create(req.body)
    .then(eBook => {
      console.log(eBook)
      res.json(eBook)
    })
    .catch((err) => handleError(err, res))
}

function getEBooksById(req, res) {
  EBooksModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteEBooksById(req, res) {
  EBooksModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateEBooks(req, res) {
  EBooksModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}


module.exports = {
  getAllEBooks,
  getEBooksById,
  deleteEBooksById,
  updateEBooks,
  createEBook
}