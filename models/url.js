const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    shortURL: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory: [{
        timestamp: {
            type: Number,
        }
    }]
}, {
    timestamps: true,
})

module.exports = mongoose.model('UrlSchema', urlSchema);