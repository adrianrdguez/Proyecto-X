const router = require('express').Router()


const {
    getSearch
} = require('../controllers/search.controller')




router.post("/", getSearch)

module.exports = router

