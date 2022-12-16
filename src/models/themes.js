const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ThemeSchema = new Schema({

    code : {
        type : String,
        enum: ['2H', '2V', '3', '4']
    },
    t1: {type : String},
    extension_t1: {type : String},
    t2: {type: String},
    extension_t2: {type : String},
    t3: {type : String},
    extension_t3: {type : String},
    t4: {type : String},
    extension_t4: {type : String},
});


module.exports = mongoose.model('Theme', ThemeSchema);