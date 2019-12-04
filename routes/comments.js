const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//PATH = /api/v1/comments

//POST new comment
router.post('/:matchId/newComment', ctrl.comments.addComment);

//DELETE all comments
router.delete('/yeet', ctrl.comments.yeet);

module.exports = router;