const express = require('express');
const router = express.Router()
const userController = ('../controllers/userController')

router.route('/')
.get(userController)