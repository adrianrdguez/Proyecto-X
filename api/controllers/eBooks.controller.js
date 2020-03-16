const EBooksModel = require('../models/eBooks.model')
const { handleError } = require('../utils')



module.exports = {
    getAllEBooks,
    getEBooksById,
    deleteEBooksById,
    updateEBooks
}

