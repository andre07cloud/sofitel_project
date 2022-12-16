const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingSchema = new Schema({

    ip: {type: String, required: true, unique:true, trim: true},
    username: {type: String, required: true, trim: true},
    type_affichage: {type: String, required: true, trim: true}
    },
    { timestamps: true }
)

module.exports = mongoose.model('Setting', SettingSchema);