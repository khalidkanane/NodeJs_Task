const express = require('express')
const UserController = require('../controleur/User')
const router = express.Router();
router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);
module.exports = router 