const router = require('express').Router()

const {
    getAllHistory,
    getHistoryById,
    deleteHistoryById,
    updateHistory
} = require('../controllers/history.controller')

const { authUser } = require('../utils') // Authenticated Route

router.get('/', authUser, getAllHistory)
router.get('/:id', authUser, getHistoryById)
router.delete('/:id', authUser, deleteHistoryById)
router.put('/:id', authUser , updateHistory)

module.exports = router