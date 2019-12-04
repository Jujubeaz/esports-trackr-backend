const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

//PATH = /api/v1/users

//GET all users
router.get('/all', ctrl.users.showAllUsers);

//GET User by ID
router.get('/:id', ctrl.users.show);

//PUT Update User
router.put('/:id', ctrl.users.update);

//DELETE Yeet all users
router.delete('/yeet', ctrl.users.yeet)

module.exports = router;