const router = require('express').Router()

const {
    getAllHistory,
    getHistoryById,
    deleteHistoryById,
    updateHistory
} = require('../controllers/history.controller')

router.get('/', getAllHistory)
router.get('/:id', getHistoryById)
router.delete('/:id', deleteHistoryById)
router.put('/:id', updateHistory)

module.exports = router