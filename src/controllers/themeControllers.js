
const themeService = require('../services/themeServices');

const createTheme = async (req, res) => {

    const themeBody = req.body;
    try{
        const theme = await themeService.createTheme(themeBody);
        res.status(200).json({"message" : "theme created successfully!!!"});
    }
    catch(err){
        res.status(500).json({"message" : "An error occured!!!"})
    }
    
};

const sendFile = async (req, res) => {
    try{
        if(req.file){
            res.status(200).json({"message" : "File sent successfully!!!"});
        }
    }
    catch(err){
        res.status(500).json({"message" : "An error occured!!!"});
    }
}

module.exports = {
    createTheme,
    sendFile
}