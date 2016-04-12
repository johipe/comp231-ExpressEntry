var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var ApplicantSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    mobile: String,
    address: String,
    postalcode: String,
    status: String,
    userId: Schema.Types.ObjectId,
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('ApplicantDetails', ApplicantSchema);