const express = require('express');

const controller = require('../controllers/totemControllers');
const uploadService = require('../services/uploadFile');
const upload = uploadService.uploadMiddleFile()

const TotemRouter = express.Router();

TotemRouter.put('/totem1/create', controller.createTotem);
TotemRouter.post('/sendFile', upload.single('image') , controller.sendFile);
TotemRouter.put('/totem2/create', controller.createTotem2);

module.exports = TotemRouter;