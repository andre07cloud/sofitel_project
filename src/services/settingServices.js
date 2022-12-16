const Setting = require('../models/settings');

//CREATE SETTING
const createSetting = async (settingBody) =>{

    const setting = await Setting.create(settingBody);
    return setting;
}

// lIST OF ALL SETTINGS
const getSettings = async () => {
    
    const settings = await Setting.find();
    return settings;
}

//UPDATE SETTING BY ID
const updateSettingById = async (settingId, body) => {
    const setting = await Setting.findByIdAndUpdate(
        settingId,
        {
            $set: body,
        },
        { new: true}
    );
    return setting;
}

//DELETE SETTING BY ID
const deleteSettingById = async (settingId) => {
    const setting = await Setting.findByIdAndDelete(settingId);
    return setting;
}


module.exports = {
    createSetting,
    getSettings,
    updateSettingById,
    deleteSettingById
}