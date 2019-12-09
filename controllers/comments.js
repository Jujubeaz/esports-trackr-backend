const db = require('../models');

const all = (req, res) => {
  db.Comment.find({})
    .exec((err, allComments) => {
      if (err) {
        return console.log(err)
      };
      res.json({
        status: 200,
        count: allComments.length,
        data: allComments
      });
    });
};

const addComment = (req, res) => {
  const commentData = {...req.body, user: req.session.currentUser.id, match: req.params.matchId}
  db.Comment.create(commentData, (err, createdComment) => {
    if (err) return console.log(err);
    res.json({
      status: 201,
      data: createdComment
    })
  });
};

const yeet = (req, res) => {
  db.Comment.deleteMany({}, (err, deletedComments) => {
    if (err) return console.log(err);
    res.json({
      status: 200,
      message: 'YEET'
    });
  });
};

module.exports = {
  all,
  addComment,
  yeet
}