var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var books_controller = require('../controllers/books');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// books ROUTES ///
// POST request for creating a books.
router.post('/books', books_controller.books_create_post);
// DELETE request to delete books.
router.delete('/books/:id', books_controller.books_delete);
// PUT request to update books.
router.put('/books/:id', books_controller.books_update_put);
// GET request for one books.
router.get('/books/:id', books_controller.books_detail);
// GET request for list of all books items.
router.get('/books', books_controller.books_list);
module.exports = router;