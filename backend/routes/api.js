var express = require('express');
var router = express.Router();

/* test API */
router.get('/', function (req, res, next) {
  res.status(200).send('API is working');
});

// Routes
const catsRoutes = require('./CatRouter');
const historyRoutes = require('./HistoryRouter');

// Routers
router.use('/cat', catsRoutes);
router.use('/history', historyRoutes);

router.use(function(req, res) {
  res.status(404).send("Page Not Found");
});

module.exports = router;
