const mongoose = require('mongoose');

const MediaSchema = mongoose.Schema({
  teamId: {
    type: String,
    required: [true, 'Need a team ID to save team media']
  },
  logo: String,
  splash: String,
});

const Media = mongoose.model('Media', MediaSchema);

module.exports = Media;