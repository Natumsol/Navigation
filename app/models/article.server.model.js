/**
 * Created by LiuJ on 2015/8/5.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    content: {
        type: String,
        trim: true
    },
    author: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('Article', UserSchema);