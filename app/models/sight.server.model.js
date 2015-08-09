/**
 * Created by LiuJ on 2015/8/9.
 */
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var ArticleSchema = new Schema({
    content: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        enum: ['1', '2', '3', '4']
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
mongoose.model('Article', ArticleSchema);

var SightSchema = new Schema({
    type: {
        type: String,
        enum: ["a", "b", "c"]//景点类别
    },
    introduction: [ArticleSchema]
});
mongoose.model("Sight", SightSchema);
