const router = require('express').Router()

const {
    getAllEBooks,
    getEBooksById,
    deleteEBooksById,
    updateEBooks,
    createEBook
} = require('../controllers/eBooks.controller')

const { authUser } = require('../utils') // Authenticated Route

router.get('/', authUser, getAllEBooks)
router.get('/:id', authUser, getEBooksById)
router.post("/", authUser, createEBook)
router.delete('/:id', authUser, deleteEBooksById)
router.put('/:id', authUser, updateEBooks)



module.exports = router

