const express = require('express')
const router = express.Router()
const { isAuthorized } = require('../middlewares')
const { register, login, editProfile, profile } = require('../controllers/users')

router.get('/profile', isAuthorized, profile)
router.post('/register', register)
router.post('/login', login)
router.patch('/', isAuthorized, editProfile)

module.exports = router
