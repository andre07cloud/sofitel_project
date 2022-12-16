const planService = require('../services/plannificationServices');

const createPlannification = async (req, res) => {

    try{
        const planBody = req.body;
        planBody.image_salle = '/datas/'+planBody.nom_image_salle.trim()+'.'+planBody.extension_image;
        console.log(planBody);
        const plan = await planService.createPlanning(planBody);
        console.log(plan);
        res.status(200).json({"message" : "Planning created successfully!!!"});
    }
    catch(err){
        res.status(500).json({"message" : "An error occured!!!"});
    }
    

}

const updatePlan = async (req, res) => {
    const planBody =req.body;
    console.log("REQ BODY ELEMENT: "+req.body.client_name);
    console.log("REQ BODY: "+planBody);
    if(planBody.affichage == "oui" || planBody.affichage == "logo"){
        planBody.client_logo = '/datas/'+planBody.client_logo.trim()+'.'+planBody.extension_logo;
    }
    console.log("Passer"+planBody);
    try{
        const plan = await planService.updatePlanById(req.params.planId, planBody);
        res.status(200).json({"message" : "Program added in meeting room"});
    }
    catch(err){
        res.status(500).json({"message" : "An error occured!!!"});
    }
    
}

const sendImage = async (req, res) => {
    // const type_affichage = req.headers.type_affichage;
    // console.log(type_affichage);
    try{
        if(req.file){
            res.status(200).json({"message" : "File sent successfully!!!"});
        }
    }
    catch(err){
        res.status(500).json({"message" : "An error occured!!!"});
    }
}

const sendLogo = async (req, res) => {
    // const type_affichage = req.headers.type_affichage;
    // console.log(type_affichage);
    try{
        if(req.file){
            res.status(200).json({"message" : "File sent successfully!!!"});
        }
    }
    catch(err){
        res.status(500).json({"message" : "An error occured!!!"});
    }
}

const getPlans = async (req, res) => {

    try{
        const plans = await planService.getPlans();
        res.status(200).json(plans);
    }
    catch(err){
        res.status(500).json({"message" : "An error occured!!!"});
    }
    
}

const deletePlan = async (req, res) => {

    try{
        const plan = await planService.deletePlanById(req.params.planId);
        res.status(200).json(plan);
    }
    catch(err){
        res.status(500).json({"message" : "An error occured!!!"});
    }
    
}


module.exports = {
    createPlannification,
    updatePlan,
    sendImage,
    sendLogo,
    getPlans,
    deletePlan
}