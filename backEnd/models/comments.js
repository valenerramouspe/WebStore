const mongoose = require('mongoose');


const commentModel = new mongoose.Schema({
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const comment = mongoose.model('comment', commentModel);

module.exports = comment;
