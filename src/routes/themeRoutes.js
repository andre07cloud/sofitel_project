const express = require('express');
const ThemeRouter = express.Router();
const uploadService = require('../services/uploadFile');
const upload = uploadService.uploadMiddleThemeFile();

const controller = require('../controllers/themeControllers');

ThemeRouter.post('/sendFile', upload.single('image'), controller.sendFile);
ThemeRouter.put('/create', controller.createTheme);


module.exports = ThemeRouter;