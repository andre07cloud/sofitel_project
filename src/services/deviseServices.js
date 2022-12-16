const TarifDevise = require('../models/tarif_devises');
const fs = require('fs');

const createBilling = async (billBody) => {
    const devises = await TarifDevise.find();
    
    if(devises.length==0){
        const billing = await TarifDevise.create(billBody);
        setTimeout( async() => {
            const data = await TarifDevise.find();
            try{
                fs.writeFileSync("./public/datas/deviseTarif.cfg", JSON.stringify(data));
                console.log({"message":"data appened in file successfuly!!!"});
            }
            catch(err){
                console.log({"message":"appending data failed!!!"});
                console.log(err);
            }
        }, 3000 );
        return billing;
    }
    else{
        
        //const deviseId = devises[0].id;
        const billing = await TarifDevise.findByIdAndUpdate(
            devises[0].id,
            {$set: billBody},
            {new:true}
        );
        setTimeout( async() => {
            const data = await TarifDevise.find();
            try{
                fs.writeFileSync("./public/datas/deviseTarif.cfg", JSON.stringify(data));
                console.log({"message":"data appened in file successfuly!!!"});
            }
            catch(err){
                console.log({"message":"appending data failed!!!"});
                console.log(err);
            }
        }, 3000 );
        return billing;
    }
   
    
}



module.exports = {
    createBilling,
}