const router = require('express').Router()


const {
  getAllAuthor,
  createAuthor,
  getAuthorById,
  deleteAuthorById
} = require('../controllers/author.controller')


router.get('/', getAllAuthor)
router.get('/:id', getAuthorById)
router.post("/", createAuthor)
router.delete('/:id', deleteAuthorById)

module.exports = router


