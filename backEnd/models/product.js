const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  description: String,
  imageURL: String,
  comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }],
});

const product = mongoose.model('product', productModel);

module.exports = product;
