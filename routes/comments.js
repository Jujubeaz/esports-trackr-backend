const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//PATH = /api/v1/comments

//GET all comments
router.get('/all', ctrl.comments.all);

//POST new comment
router.post('/:matchId/newComment', ctrl.comments.addComment);

//DELETE all comments
router.delete('/yeet', ctrl.comments.yeet);

module.exports = router;