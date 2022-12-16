const totemService = require('../services/totemServices');

//Create Totem1
const createTotem = async (req, res) => {
    const totemBody = req.body;
    console.log(totemBody);
    try{
        const totem = await totemService.createTotem(totemBody);
        res.status(200).json({"message" : "totem created successfully!!!"});
    }
    catch(err){
        res.status(500).json({"message" : "An error occured!!!"});
    }
    
}

//Upload Totem File
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


//Create Totem2
const createTotem2 = async (req, res) => {
    const totemBody = req.body;
    try{
        const totem2 = await totemService.createTotem2(totemBody);
        res.status(200).json({"message" : "Totem created successfully!!!"});
    }
    catch(err){
        res.status(500).json({"message" : "An error occured!!!"});
    }
}


module.exports = {
    createTotem,
    sendFile, 
    createTotem2
}