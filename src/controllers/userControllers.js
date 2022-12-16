const User = require('../models/users');
const Role = require('../models/roles');
const userService = require('../services/uservices');
const { json } = require('express');
cryptoJS = require("crypto-js");

//Create user in Data Base
const createUser = async (req, res) =>{
    try{
        var isAdmin=false;
        if(req.body.role==Role.admin){
            isAdmin=true;
        }
        let newUser = new User({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            role: req.body.role,
            password: cryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
            isAdmin:isAdmin,
            avatar: req.file? '/datas/'+req.file.filename : '/datas/avatar.png'

        });
        console.log(newUser)
        const user = await userService.createUser(newUser);
        res.status(200).json({"message" : "User created successfully!!!"});
    }
    catch(err){
        console.log(err)
        res.status(500).json({"message" : "Error encounterd creating user!!!"});
    }
}
//Delete user By Id
const deleteUser = async (req, res) => {
    try{
        const user = await userService.deleteUserById(req.params.userId);
        res.status(200).json({"message" : "user deleted successfully!!!"});
    }
    catch(err){
        res.status(500),json({"message" : "error encountered deleting user!!!"});
    }
}

//List of all users
const getUsers = async (req, res) => {
    const users = await userService.getUsers();
    res.status(200).json(users);
}

//Get User By Id
const getUser = async (req, res) => {
    try{
        const user = await userService.getUserById(req.params.userId);
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({"message" : "An error occured!!!"});
    }  
}
//Get Users and Admins
const getUserAdmin = async (req, res) => {
    const users = await userService.getUsersAndAdmins();
    res.status(200).json(users);
}

module.exports = {
    createUser,
    deleteUser,
    getUsers,
    getUser,
    getUserAdmin
}