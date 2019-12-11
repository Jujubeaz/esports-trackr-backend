const db = require('../models');

//GET all media
const showAll = (req, res) => {
  db.Media.find({})
  .exec((err, allMedia) => {
    if (err) {
      return console.log(err)
    };
    res.json({
      status: 200,
      count: allMedia.length,
      data: allMedia
    });
  });
};

//GET media by teamId
const getByTeamId = (req, res) => {
  db.Media.findOne({teamId:req.params.teamId}, (err, teamMedia)=> {
    if (err) return res.status(500).json({
      status: 500,
      message: err
    });
    res.status(200).json({
      status: 200,
      data: teamMedia
    });
  });
};

//POST new relation
const newMedia = (req, res) => {
  const newMedia = {
    teamId: req.body.teamId,
    logo: req.body.logo,
    splash: req.body.splash
  }
  db.Media.create(newMedia, (err, savedMedia) => {
    if (err) return console.log(err);
    res.json({
      status: 201,
      data: savedMedia
    });
  });
};

//DELETE all
const yeet = (req, res) => {
  db.Match.deleteMany({}, (err, deletedMedia) => {
    if (err) return console.log(err);
    res.json({
      status: 200,
      message: 'YEET'
    });
  });
};

module.exports = {
  showAll,
  getByTeamId,
  newMedia,
  yeet
}