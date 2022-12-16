
const express = require('express');
const controller = require('../controllers/plannificationControllers');
const uploadService = require('../services/uploadFile');
const uploadSalle = uploadService.uploadMiddleSalle();
const uploadLogo = uploadService.uploadMiddleLogo();

const  PlanRouter = express.Router();

PlanRouter.post('/create', controller.createPlannification);
PlanRouter.patch('/update/:planId', controller.updatePlan);
PlanRouter.post('/sendImage',uploadSalle.single('image') , controller.sendImage);
PlanRouter.post('/sendLogo',uploadLogo.single('image') , controller.sendLogo);
PlanRouter.get('/list', controller.getPlans);
PlanRouter.delete('/delete/:planId', controller.deletePlan);


module.exports = PlanRouter;