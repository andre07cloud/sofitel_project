
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Totem1Schema = new Schema({
    image_client : {type : String, trim: true},
    nom_salle : {type : String, trim: true},
    direction : {type: String, trim: true},
    type_affichage : {type : String, trim: true},
    is_logo: {type: Boolean, default: false}
});

module.exports = mongoose.model('Totem2', Totem1Schema);