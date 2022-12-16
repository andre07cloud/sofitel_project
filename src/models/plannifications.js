const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlanningSchema = new Schema({

    nom_salle: {type: String, required: true, trim: true},
    image_salle: {type : String, required: true, trim: true},
    extension_image:{type: String, required: true, trim: true},
    nom_image_salle: {type : String, trim: true},
    surface: {type : String, trim: true},
    banquest: {type: String, trim: true},
    reception: {type: String, trim: true},
    theatre: {type: String, trim: true},
    classroom: {type: String, trim: true},
    boardroom: {type: String, trim: true},
    u_shape: {type: String, trim: true},
    materiel: {type : String, trim: true},
    hollow_rectangle: {type: String, trim: true},
    type_affichage: {type: String, trim: true},
    busy_room: {type: Boolean, default: false},
    is_program: {type: Boolean, default: false},
    empty_color: {type: String, trim: true},
    font_salle: {type: String, trim: true},
    program: {
        client_name: {type: String, trim: true},
        client_logo: {type: String, trim: true},
        extension_logo:{type: String, trim: true},
        start_meeting: {type: String, trim: true},
        affichage: {type: String, trim: true},
        busy_color1: {type: String, trim: true},
        busy_color2: {type: String, trim: true},
        font_client: {type: String, trim: true}
    }
    
});

module.exports = mongoose.model('Plannification', PlanningSchema);