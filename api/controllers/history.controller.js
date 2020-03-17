const HistoryModel = require('../models/history.model')
const { handleError } = require('../utils')

function getAllHistory(req, res) {
  HistoryModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getHistoryById(req, res) {
  HistoryModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}


function deleteHistoryById(req, res) {
  HistoryModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateHistory(req, res) {
  HistoryModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}


module.exports = {
  getAllHistory,
  getHistoryById,
  deleteHistoryById,
  updateHistory

}

