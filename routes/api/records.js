var express = require('express');
var router = express.Router();
var recordsCtrl = require('../../controllers/api/records');

router.get('/', recordsCtrl.index);
router.post('/', recordsCtrl.create)
router.put('/:id', recordsCtrl.update)
router.delete('/:id', recordsCtrl.delete)
router.get('/:id', recordsCtrl.show)


module.exports = router;