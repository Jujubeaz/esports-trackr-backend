const db = require('../models');

//GET all matches
const showAll = (req, res) => {
  db.Match.find({}, (err, allMatches) => {
    if (err) return res.status(500).json({
      status: 500,
      message: err
    });
    res.status(200).json({
      status: 200,
      data: allMatches
    });
  });
};

const show = (req, res) => {
  db.Match.findById(req.params.id)
  .populate('comments')
  .exec((err, foundMatch) => {
    if(err) return res.status(500).json({
      status: 500,
      message: err
    });
    res.status(200).json({
      status: 200,
      data: foundMatch
    });
  });
};

const newMatch = (req, res) => {
  const newMatch = {
    match: req.body.match
  }
  db.Match.create(newMatch, (err, savedMatch) => {
    if (err) return console.log(err);
    res.json({
      status: 201,
      data: savedMatch
    });
  });
};

const update = (req, res) => {
  db.Match.findByIdAndUpdate(req.params.id, req.body, (err, updatedMatch) => {
    if (err) return console.log(err);
    res.status(200).json({
      status: 200,
      data: updatedMatch
    });
  });
};

const yeet = (req, res) => {
  db.Match.deleteMany({}, (err, deletedMatches) => {
    if (err) return console.log(err);
    res.json({
      status: 200,
      message: 'YEET'
    });
  });
};

module.exports = {
  showAll,
  show,
  newMatch,
  update,
  yeet
}