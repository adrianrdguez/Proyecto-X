const router = require('express').Router()

const {
  getAllUsers,
  getUserById,
  deleteUserById,
  addBookToUser,
  updateUser
} = require('../controllers/users.controller')

const { authUser } = require('../utils') // Authenticated Route

router.get('/', authUser, getAllUsers)
router.post("/:id", authUser, addBookToUser)
router.get('/:id', authUser, getUserById)
router.delete('/:id', authUser, deleteUserById)
router.put('/:id', authUser, updateUser)

module.exports = router
