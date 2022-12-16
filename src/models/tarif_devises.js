const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TarifDeviseSchema = new Schema({

    devises: {
        sar: { type: String, trim: true, required : true},
        kwd: { type: String, trim: true, required : true},
        aed: { type: String, trim: true, required : true},
        eur: { type: String, trim: true},
        usd: { type: String, trim: true},
        cad: { type: String, trim: true},
        gbp: { type: String, trim: true},
        dkr: { type: String, trim: true},
        sek: { type: String, trim: true},
        chf: { type: String, trim: true},
        jpy: { type: String, trim: true},
        nok: { type: String, trim: true},
        bhd: { type: String, trim: true},
        gip: { type: String, trim: true},
        omr: { type: String, trim: true},
        qar: { type: String, trim: true},
    },
    tarifs: {
        cd: { type: String, trim: true, required : true},
        cdc: { type: String, trim: true, required : true},
        cs: { type: String, trim: true, required : true},
        si: { type: String, trim: true, required : true},
        sr: { type: String, trim: true, required : true},
        ts: { type: String, trim: true, required : true}
    },
    image: {
        filePath: {type : String, default: "", trim: true},
        extension: {type : String, default: "", trim: true},
    },
    video: {
        filePath: {type : String, default: "", trim: true},
        extension: {type : String, default: "", trim: true},
    },
    theme: {
        type: String, required: true, trim: true
    },
    type_affichage: {
        type: String, required: true, trim: true
    }
    
    },
    { timestamps: true }
);

module.exports = mongoose.model('Tarif_devise', TarifDeviseSchema);