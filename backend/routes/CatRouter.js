const express = require('express');
const router = express.Router();

const CatsController = require('../controllers/CatsController');

router.get('/', CatsController.get_cat);

module.exports = router;