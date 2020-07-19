var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recordSchema = new Schema({
  name: {type: String, required: true},
  artist: {type: String, required: true},
  year: Number,
  genre: String
},{
  timestamps: true
});

module.exports = mongoose.model('Record', recordSchema);