const router = require('express').Router()


const {
    getSearch
} = require('../controllers/search.controller')


const { authUser } = require('../utils') // Authenticated Route

router.post("/", authUser, getSearch)

module.exports = router

