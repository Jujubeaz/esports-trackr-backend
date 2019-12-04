const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// PATH /api/v1/matches

//GET all matches
router.get('/all', ctrl.matches.showAll);

//GET find by id
router.get('/:id', ctrl.matches.show);

//POST new match
router.post('/new', ctrl.matches.newMatch);

//UPDATE match
router.put('/:id', ctrl.matches.update);

//DELETE all matches
router.delete('/yeet', ctrl.matches.yeet);

module.exports = router;