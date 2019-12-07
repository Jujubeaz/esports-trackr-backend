const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// PATH /api/v1/media

//GET all media
router.get('/all', ctrl.media.showAll);

//GET media by teamId
router.get('/:teamId', ctrl.media.getByTeamId);

//POST new relation
router.post('/new', ctrl.media.newMedia)

//DELETE all
router.delete('/yeet', ctrl.media.yeet);

module.exports = router;