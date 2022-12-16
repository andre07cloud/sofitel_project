const Totem1 = require('../models/totems');
const Totem2 = require('../models/totem2');
const fs = require('fs');
const totem2 = require('../models/totem2');
const createTotem = async (totemBody) => {

    const totemFound = await Totem1.findOne({nom_totem : totemBody.nom_totem});
    const update = {
        extension1: totemBody.extension1,
        extension2: totemBody.extension2,
        nom_totem: totemBody.nom_totem,
        file1 : {
            filePath: '/datas/'+'file1_'+totemBody.nom_totem+'.'+totemBody.extension1,
            extension: totemBody.extension1
        },
        file2 : {
            filePath: '/datas/'+'file2_'+totemBody.nom_totem+'.'+totemBody.extension2,
            extension: totemBody.extension2
        },
        libelle: totemBody.libelle,
        type_affichage: totemBody.type_affichage
    }
    if(!totemFound){
        const totem = await Totem1.create(update);
        setTimeout( async() => {
            const data = await Totem1.find();
            console.log("Datas: "+data);
            try{
                fs.writeFileSync("./public/datas/totem1.cfg", JSON.stringify(data));
                console.log({"message":"data appened in file successfuly!!!"});
            }
            catch(err){
                console.log({"message":"appending data failed!!!"});
                console.log(err);
            }
        }, 3000 );
        return totem;
    }
    else{
        const filter = {nom_totem : totemBody.nom_totem};
        const totem = await Totem1.findOneAndUpdate(
            filter,
            update,
            {new : true}
        );
        setTimeout( async() => {
            const data = await Totem1.find();
            console.log("Datas: "+data);
            try{
                fs.writeFileSync("./public/datas/totem1.cfg", JSON.stringify(data));
                console.log({"message":"data appened in file successfuly!!!"});
            }
            catch(err){
                console.log({"message":"appending data failed!!!"});
                console.log(err);
            }
        }, 3000 );
        return totem;
    }
    
}

const createTotem2 = async (totemBody) => {
    const totem = await Totem2.findOne({nom_salle: totemBody.nom_salle});
    if(!totem){
        const totem2 = await Totem2.create(totemBody);
        setTimeout( async() => {
            const data = await Totem2.find();
            try{
                fs.writeFileSync("./public/datas/totem2.cfg", JSON.stringify(data));
                console.log({"message":"data appened in file successfuly!!!"});
            }
            catch(err){
                console.log({"message":"appending data failed!!!"});
                console.log(err);
            }
        }, 3000 );
        return totem2;
    }
    else{
        const filter = {nom_salle: totemBody.nom_salle};
        const totem2 = await Totem2.findOneAndUpdate(
            filter,
            totemBody,
            {new : true}
        );
        setTimeout( async() => {
            const data = await Totem2.find();
            try{
                fs.writeFileSync("./public/datas/totem2.cfg", JSON.stringify(data));
                console.log({"message":"data appened in file successfuly!!!"});
            }
            catch(err){
                console.log({"message":"appending data failed!!!"});
                console.log(err);
            }
        }, 3000 );
        return totem2;
    }
   
    
}

module.exports = {
    createTotem,
    createTotem2
}