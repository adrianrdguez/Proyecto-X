const router = require('express').Router()

const {
  getAllUsers,
  getUserById,
  deleteUserById,
  addBookToUser,
  updateUser
} = require('../controllers/users.controller')

router.get('/', getAllUsers)
router.post("/:id", addBookToUser)
router.get('/:id', getUserById)
router.delete('/:id', deleteUserById)
router.put('/:id', updateUser)

module.exports = router
