var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdminSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
// Compile model from schema
const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;