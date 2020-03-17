const router = require('express').Router()

const {
    getAllEBooks,
    getEBooksById,
    deleteEBooksById,
    updateEBooks,
    createEBook
} = require('../controllers/eBooks.controller')

router.get('/', getAllEBooks)
router.get('/:id', getEBooksById)
router.post("/", createEBook)
router.delete('/:id', deleteEBooksById)
router.put('/:id', updateEBooks)



module.exports = router

