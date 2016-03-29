var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var PaymentSchema = new Schema({
    userid: String,
    user: String,
    amount: Number,
    cardholdername: String,
    cardnumber: String,
    expirymonth: Number,
    expiryyear: Number,
    cvv: Number,
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Payment', PaymentSchema);