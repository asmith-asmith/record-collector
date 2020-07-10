var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recordSchema = new Schema({
  name: {type: String, required: true},
  band: {type: String, required: true},
  year: {type: String},
  recordType: String
},{
  timestamps: true
});

module.exports = mongoose.model('Record', recordSchema);