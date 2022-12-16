

const Devise = require('../models/tarif_devises');
const deviseService = require('../services/deviseServices');

const createDevise = async (req, res, next) => {
   
    const deviseBody = {
        devises: {
            sar: req.body.sar,
            kwd: req.body.kwd,
            aed: req.body.aed,
            eur: req.body.eur,
            usd: req.body.usd,
            cad: req.body.cad,
            gbp: req.body.gbp,
            dkr: req.body.dkr,
            sek: req.body.sek,
            chf: req.body.chf,
            jpy: req.body.jpy,
            nok: req.body.nok,
            bhd: req.body.bhd,
            gip: req.body.gip,
            omr: req.body.omr,
            qar: req.body.qar,
        },
        tarifs: {
            cd: req.body.cd,
            cdc: req.body.cdc,
            cs: req.body.cs,
            si: req.body.si,
            sr: req.body.sr,
            ts: req.body.ts,
        },
        theme: req.body.theme, 
        type_affichage: req.body.type_affichage 
    }
    let image = {};
    let video = {};
    if(req.body.theme == "theme1"){
        image = {
            filePath: '/datas/'+'IMG_'+req.body.type_affichage+'.'+req.body.extension_image,
            extension: req.body.extension_image
        }
        deviseBody.image = image;
    }

    if(req.body.theme == "theme2"){
        image = {
            filePath: '/datas/'+'IMG_'+req.body.type_affichage+'.'+req.body.extension_image,
            extension: req.body.extension_image
        };
        video = {
            filePath: '/datas/'+'VID_'+req.body.type_affichage+'.'+req.body.extension_video,
            extension: req.body.extension_video
        }
        deviseBody.image = image;
        deviseBody.video = video
    }
    console.log(deviseBody);
   
    try{
        const devise = await deviseService.createBilling(deviseBody);
        console.log("devise1");
        res.status(200).json({"message" : "Tarif and devise created successfully!!!"});
    }
    catch(err){
        return res.status(500).json({"message" : "error encoutered!!!"})
    }
    

}

const sendFile = async (req, res) => {
    const type_affichage = req.headers.type_affichage;
    console.log(type_affichage);
    try{
        if(req.file){
            res.status(200).json({"message" : "File sent successfully!!!"});
        }
    }
    catch(err){
        res.status(500).json({"message" : "An error occured!!!"});
    }
}




module.exports ={
    createDevise,
    sendFile,
}