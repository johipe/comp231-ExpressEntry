var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var AssessmentSchema = new Schema({
    userid: String,
    user: String,
    age: Number,
    education: String,
    experience: String,
    speaking: String,
    listening: String,
    reading: String,
    writing: String,
    secondL: String,
    results: Number,
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Assessment', AssessmentSchema);