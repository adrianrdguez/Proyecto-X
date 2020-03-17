const router = require('express').Router()

const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const todosRouter = require('./todos.router')
const searchRouter = require("./search.router")
const eBooksRouter = require("./eBooks.router")
const historyRouter = require("./history.router")
const { authUser } = require('../utils') // Authenticated Route

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/todos', todosRouter)
router.use('/search', searchRouter)
router.use("/eBooks", eBooksRouter)
router.use("/history", historyRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
