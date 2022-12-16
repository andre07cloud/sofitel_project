const express = require('express');

const userRouter = express.Router();
const auth = require('../controllers/auth');
const controller = require('../controllers/userControllers');
const uploadService = require('../services/uploadFile');

const upload = uploadService.uploadMiddleImage();

userRouter.post('/login', auth.login);
userRouter.post('/create', upload.single("image"), controller.createUser);
userRouter.delete('/delete/:userId', controller.deleteUser);
userRouter.get('/list', controller.getUsers);
userRouter.get('/:userId', controller.getUser);
userRouter.get('/list/root', controller.getUserAdmin);



module.exports = userRouter;

