const HistoryModel = require('../models/history.model')
const { handleError } = require('../utils')

module.exports = {
    getAllHistory,
    getHistoryById,
    deleteHistoryById,
    updateHistory

}