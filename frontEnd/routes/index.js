const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Book Store' });
});

router.get('/createproduct', (req, res, next) => {
  res.render('createProduct', { title: 'Book Store' });
});

router.get('/singleproduct', (req, res, next) => {
  res.render('singleProductView', { title: 'Book Store' });
});


module.exports = router;
