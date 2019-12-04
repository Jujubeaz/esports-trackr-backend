const db = require('../models');

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



module.exports = {
  showAll,

}