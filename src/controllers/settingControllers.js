
const settingService = require('../services/settingServices');

const createSetting = async (req, res) => {
    try{
        const setting = await settingService.createSetting(req.body);
        res.status(201).json({"message" : "setting added successfully!!!"});
    }
    catch(err){
        res.status(500).json({"message" : "error encountered adding setting!!!"});
    }

}

const getSettings = async (req, res) => {
    try{
        const settings = await settingService.getSettings();
        res.status(200).json(settings);
    }
    catch(err){
        res.status(500).json({"message" : "error "})
    }
}

const updateSetting = async (req, res) => {

    try{
        const setting = await settingService.updateSettingById(req.params.settingId, req.body);
        res.status(200).json({"message" : "setting updated successfully!!!"});
    }
    catch(err){
        res.status(200).json({"message" : "error encountered updating setting!!!"});
    }
}

const deleteSetting = async (req, res) => {

    try{
        const setting = await settingService.deleteSettingById(req.params.settingId);
        res.status(200).json({"message" : "setting deleted successfully!!!"});
    }
    catch(err){
        res.status(500).json({"message" : "error encounterd deleting!!!"});
    }
}

module.exports ={
    createSetting,
    getSettings,
    updateSetting,
    deleteSetting
}