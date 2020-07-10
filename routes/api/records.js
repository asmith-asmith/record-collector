var express = require('express');
var router = express.Router();
var recordsCtrl = require('../../controllers/api/records');

router.get('/', recordsCtrl.index);

module.exports = router;