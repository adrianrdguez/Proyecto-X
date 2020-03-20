const router = require('express').Router()


const {
  getAllAuthor,
  createAuthor,
  getAuthorById,
  deleteAuthorById
} = require('../controllers/author.controller')

const { authUser } = require('../utils') // Authenticated Route


router.get('/', authUser, getAllAuthor)
router.get('/:id', authUser, getAuthorById)
router.post("/", authUser, createAuthor)
router.delete('/:id', authUser, deleteAuthorById)

module.exports = router


