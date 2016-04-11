var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var workPlanSchema = new Schema({
    userid: {
            type: Schema.ObjectId,
            ref: 'User'
        },
    activities: [{ // <--- Notice the brackets: this is an array of elements
        itemNo: Number,
        activityDescription: String,
        responasable: String,
        required: String,
        comments: String,
        duration: String,
        startingDate: String,
        endingDate: String,        
    }],
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('WorkPlan', workPlanSchema);