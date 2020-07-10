const Record = require('../../models/record');

module.exports = {
    index
}

function index(req, res){
    Record.find({}, function(err, records){
        res.status(200).json(records)
    })
}