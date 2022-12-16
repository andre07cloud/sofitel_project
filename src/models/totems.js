const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TotemSchema = new Schema({

    extension1: {type: String, trim: true},
    extension2: {type: String, trim: true},
    nom_totem: {type: String, required:true, trim: true},
    libelle: {type: String, trim: true},
    file1: {
        filePath: {type : String, default: "", trim: true},
        extension: {type : String, default: "", trim: true},
    },
    file2: {
        filePath: {type : String, default: "", trim: true},
        extension: {type : String, default: "", trim: true},
    },
    type_affichage: {type: String, trim: true}
});

module.exports = mongoose.model('Totem1', TotemSchema);