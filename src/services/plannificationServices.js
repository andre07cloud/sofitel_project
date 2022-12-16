const Plan = require('../models/plannifications');
const fs = require('fs');

//Create meeting room without Client
const createPlanning = async (planBody) => {
    
        const plan = await Plan.create(planBody);
        setTimeout( async() => {
            const data = await Plan.find();
            console.log("Datas: "+data);
            try{
                fs.writeFileSync("./public/datas/salle.cfg", JSON.stringify(data));
                console.log({"message":"data appened in file successfuly!!!"});
            }
            catch(err){
                console.log({"message":"appending data failed!!!"});
                console.log(err);
            }
        }, 3000 );
        return plan;
};

//Update meeting room adding a Client
const updatePlanById = async (planId, planBody) => {
    const plan = await Plan.findById(planId);
    if(plan){
        plan.program = {
            client_name: planBody.client_name,
            //client_logo: planBody.affichage=="oui" || planBody.affichage=="logo"? planBody.client_logo: '',
            //extension_logo: planBody.extension_logo,
            start_meeting: planBody.start_meeting,
            affichage: planBody.affichage,
            busy_color1 : planBody.busy_color1,
            busy_color2 : planBody.busy_color2,
            font_client: planBody.font_client
        };
        
        if(planBody.affichage == "oui" || planBody.affichage == "logo"){
            plan.program.client_logo = planBody.client_logo
            plan.program.extension_logo = planBody.extension_logo;
        }

        console.log(plan.program);
        plan.type_affichage = planBody.type_affichage;
        plan.busy_room = planBody.busy_room;
        plan.is_program = true;
        plan.extension_image = planBody.extension_image;
        plan.surface = planBody.surface;
        plan.banquest = planBody.banquest;
        plan.reception = planBody.reception;
        plan.theatre = planBody.theatre;
        plan.classroom = planBody.classroom;
        plan.boardroom = planBody.boardroom;
        plan.u_shape = planBody.u_shape;
        plan.materiel = planBody.materiel;
        plan.hollow_rectangle = planBody.hollow_rectangle;
        plan.empty_color = planBody.empty_color,
        plan.font_salle = planBody.font_salle;

        console.log("UPDATED+++: "+plan);
    }
    plan.save();
    setTimeout( async() => {
        const data = await Plan.find();
        console.log("Datas: "+data);
        try{
            fs.writeFileSync("./public/datas/salle.cfg", JSON.stringify(data));
            console.log({"message":"data appened in file successfuly!!!"});
        }
        catch(err){
            console.log({"message":"appending data failed!!!"});
            console.log(err);
        }
    }, 3000 );
    
    return plan;
}

//Get all meeting Room
const getPlans = async () => {
    const plans = await Plan.find();
    return plans;
}

//Delete meeting Room By Id
const deletePlanById = async (planId) => {
    const plan = await Plan.findByIdAndDelete(planId);
    setTimeout( async() => {
        const data = await Plan.find();
        console.log("Datas: "+data);
        try{
            fs.writeFileSync("./public/datas/salle.cfg", JSON.stringify(data));
            console.log({"message":"data appened in file successfuly!!!"});
        }
        catch(err){
            console.log({"message":"appending data failed!!!"});
            console.log(err);
        }
    }, 3000 );
    return plan;
}

module.exports = {
    createPlanning,
    updatePlanById,
    getPlans,
    deletePlanById
}