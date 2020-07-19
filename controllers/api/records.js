const Record = require('../../models/record');

module.exports = {
    index,
    create,
    update,
    show,
    delete: deleteOne
}

function index(req, res){
    Record.find({}, function(err, records){
        res.status(200).json(records)
    })
}

function create(req, res){
    Record.create(req.body, function(err, record){
        res.status(201).json(record)
    })
}

function update(req, res){
    Record.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updateRecord){
      res.status(204).json(updateRecord)
    })
}

function show(req, res){
    Record.findById(req.params.id, function(err, record){
        res.status(200).json(record);
    })
}

async function deleteOne(req, res){
    try {
        const deleteRecord = Record.findByIdAndDelete(req.params.id);
        if(deletedRecord){
            res.status(200).json(deletedRecord)
        } else {
            res.res.status(404)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
