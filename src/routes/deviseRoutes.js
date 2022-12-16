
const express = require('express');
const controllerDevise = require('../controllers/deviseControllers');
const uploadService = require('../services/uploadFile');

const uploadImage = uploadService.uploadMiddleImage();
const uploadVideo = uploadService.uploadMiddleVideo();

const DeviseRouter = express.Router();

DeviseRouter.put('/create', controllerDevise.createDevise);
DeviseRouter.post('/sendImage', uploadImage.single('image') , controllerDevise.sendFile);
DeviseRouter.post('/sendVideo',uploadVideo.single('image') , controllerDevise.sendFile);

module.exports = DeviseRouter;