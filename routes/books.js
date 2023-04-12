var express = require('express');
const books_controlers= require('../controllers/books');
var router = express.Router();

/* GET home page. */
router.get('/', books_controlers.books_view_all_Page );

module.exports = router;