const mongoose = require('mongoose');

const gunSchema = mongoose.Schema({
  model: {type: String, required: true},
  category: {type: String, required: true, enum: ['handgun','shotgun','rifle','semi-automatic', 'automatic', 'melee']},
  ammoType: {type: String, required: true, enum: ['9mm', '50cal', 'hollowPoint', 'slugs', '12ga']},
});

const Gun = mongoose.model('Gun', gunSchema);

module.exports = Gun;