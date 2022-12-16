const express = require('express');
const controller = require('../controllers/settingControllers');

const SettingRouter = express.Router();

SettingRouter.post('/create', controller.createSetting);
SettingRouter.get('/list', controller.getSettings);
SettingRouter.patch('/edit/:settingId', controller.updateSetting);
SettingRouter.delete('/delete/:settingId', controller.deleteSetting);

module.exports = SettingRouter;