const express = require('express');
const router = express.Router();

const HistoryController = require('../controllers/HistoryController');

router.get('/', HistoryController.get_history);

module.exports = router;