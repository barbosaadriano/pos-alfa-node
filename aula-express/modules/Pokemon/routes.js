const express = require('express');
const router = express.Router();
const Controller = require('./controller');

router.get('/', Controller.find);
router.get('/:id', Controller.findOne);
router.put('/:id', Controller.update);
router.delete('/:id', Controller.remove);
router.post('/',Controller.create);

module.exports = router;