const express = require('express');

const router = express.Router();
const product = require('../models/product.js');
const comment = require('../models/comments.js')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/products', (req, res, next) => {
  product.find({}, (err, data) => {
    res.send(data);
  });
});

router.get('/products/:id', (req, res, next) => {
  product.findById({ _id: req.params.id }, (err, data) => {
    if (err) {
      throw new Error('Could not find product');
    }
    res.send(data);
  });
});

router.post('/products', (req, res, next) => {
  console.log(req.body);
  product.create(req.body, (err, data) => {
    if (err) {
      throw new Error('Bad product creation');
    }
    res.send('ok!');
  });
});

router.post('/comment/:id', (req, res, next) => {
  console.log(req.body);
  comment.create(req.body, (err, newComment) => {
    if (err) {
      throw new Error('Failed to create comment');
    }
    product.findById({ _id: req.params.id }, (err, foundProduct) => {
      if (err) {
        throw new Error('Could not find product');
      }
      foundProduct.comment.push(newComment);
      foundProduct.save(); // Saving the change I've made to product
      res.send('ok!');
    });
  });
});

router.put('/products/:id', (req, res, next) => {
  product.update({ _id: req.params.id }, {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imageURL: req.body.imageURL }, (err, data) => {
      if (err) {
        throw new Error('Could not update');
      }
      res.send(data);
    });
});

router.delete('/products/:id', (req, res, next) => {
  console.log('kjsadhasjkdkajs f')
  product.remove({ _id: req.params.id }, (err, data) => {
    if (err) {
      throw new Error('Could not delete');
    }
    res.send(data);
  });
});


module.exports = router;
