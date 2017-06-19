const express = require('express');

const router = express.Router();

/* GET home page. */

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Book Store' });
});

router.get('/createproduct', (req, res, next) => {
  res.render('createProduct', { title: 'Book Store' });

router.get('/', function(req, res, next) {
	product = [
	{
		id : 1,
		imageURL : "https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png",
		name : "asdas",
		price : 12,
		description : "Qibli knows Darkstalker must be stopped. And he knows he could stop him -- if he had magic. With even a sliver of the ancient dragon's all-powerful scroll, Qibli could rewrite history the right way: end war forever; make every dragon happy; perhaps even cast a very small spell so that everyone would like him nstead, as Darkstalker's dangerous influence spreads across Pyrrhia, entrancing or killing every dragon in the seven tribes, Qibli can only grasp the small animus objects he's borrowed from Turtle. With some clever thinking, Qibli's talons finally hold the power to make a difference. But prophecies are not easy to rewrite. Can Qibli be the magical force Pyrrhia needs, or will he be the one to bring Jade Mountain -- and his family, his friends, his whole world -- crashing down?"
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

router.get('/singleproduct', (req, res, next) => {
  res.render('singleProductView', { title: 'Book Store' });
});


module.exports = router;
