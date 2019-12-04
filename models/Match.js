const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchSchema = mongoose.Schema({
  comment: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  match: String
});

const Match = mongoose.model('Match', MatchSchema);

module.exports = Match;