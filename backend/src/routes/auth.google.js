const router = require('express').Router()
const RouterUser = require('../controllers/user.controller')



router.get('/login', RouterUser.Login)

router.get('/auth/google/callback', RouterUser.OAuth2Google)


module.exports = router;