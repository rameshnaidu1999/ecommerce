var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SliderSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
// Compile model from schema
const Slider = mongoose.model('Slider', SliderSchema);

module.exports = Slider;