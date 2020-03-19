const UserModel = require('../models/users.model')
const { handleError } = require('../utils')


function getAllUsers(req, res) {
  UserModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getUserById(req, res) {
  UserModel
    .findById(req.params.id)
    .populate('user_Ebooks.Id')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById(req, res) {
  UserModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateUser(req, res) {
  UserModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function addBookToUser(req, res) {
  UserModel
    .findById(req.params.id)
    .then(user => {
      const newBook = {
        Id: req.body.book,
        favorite: false
      }
      console.log(req.body.book)
      user.user_Ebooks.push(newBook)
      user.save()
      res.json(user)
    })
    .catch(err => console.log(err))
}


module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  addBookToUser,
  updateUser
}