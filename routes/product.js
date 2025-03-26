const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.index); // Định tuyến đến trang chủ

module.exports = router;
