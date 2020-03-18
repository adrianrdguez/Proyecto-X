const EBooksModel = require('../models/eBooks.model')
const { handleError } = require('../utils')



async function getSearch(req, res) {
  let obj = {}
  let search = req.body.search

  await EBooksModel
    .find({ eBook_Name: search })
    .then(books => {
      obj.ebook = books
    })
    .catch((err) => console.log(err))

  await EBooksModel
    .find()
    .populate('eBook_Author')
    .then(books => {
      obj.author = books.filter(book => 
        book.eBook_Author.author_Name == search
      )
    })
    .catch((err) => console.log(err))

  await res.json(obj)
}



module.exports = {
  getSearch
}



