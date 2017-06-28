const express = require('express');

const router = express.Router();

/* GET home page. */

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Book Store' });
});

router.get('/createproduct', (req, res, next) => {
  res.render('createProduct', { title: 'Book Store' });
});

router.get('/', function(req, res, next) {
  const product = [
    {
      id: 1,
      imageURL: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png',
      name: 'asdas',
      price: 12,
      description: 'description'
    },

  {
  	id : 2,
  	imageURL : "http://www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1.jpg",
  	name : "zxczcxz",
  	price : 12,
  	description : "asd"
  },
  {
  	id : 3,
  	imageURL : "https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png",
  	name : "asdas",
  	price : 12,
  	description : "asd"
  },
  {
  	id : 4,
  	imageURL : "https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png",
  	name : "asdas",
  	price : 12,
  	description : "asd"
  },
  {
  	id : 5,
  	imageURL : "asd",
  	name : "asdas",
  	price : 12,
  	description : "asd"
  },
  {
  	id : 6,
  	imageURL : "asd",
  	name : "asdas",
  	price : 12,
  	description : "asd"
  },
  {
  	id : 7,
  	imageURL : "asd",
  	name : "asdas",
  	price : 12,
  	description : "asd"
  },
  {
  	id : 8,
  	imageURL : "asd",
  	name : "asdas",
  	price : 12,
  	description : "asd"
  }

	];

  res.render('verTodos', {
  	product: product });

  });

router.get('/products/:id', (req, res, next) => {
  res.send({
      id: 1,
      imageURL: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png',
      name: 'asdas',
      price: 12,
      description: 'description'
    })
  //res.render('singleProductView', { title: 'Book Store', id: req.params.id });
});

router.post('/products', (req, res, next) => {
  /*res.send({
      id: 1,
      imageURL: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png',
      name: 'asdas',
      price: 12,
      description: 'description'
    })*/
    res.send('ok')
});


module.exports = router;
