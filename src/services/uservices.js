const User = require('../models/users');
const cryptoJS = require('crypto-js');
const Role = require('../models/roles');

const createUser = async (userBody) =>{
   const user = await User.create(userBody);
    return user;
}
    

const deleteUserById = async (userId) => {
    const user = await User.findByIdAndDelete(userId);
    return user;
}

const getUsers = async () => {
    const users = await User.find({role: Role.user});
    return users;
}

const getUsersAndAdmins = async () => {
    const users = await User.find();
    const admin = []
    users.map((item) => {
        if(item.role != Role.root){
            admin.push(item);
        }
    });
    return admin;
}

const getUserById = async (userId) => {
    const user = await User.findById(userId);
    return user;
}

module.exports ={
    createUser,
    deleteUserById,
    getUsers,
    getUserById,
    getUsersAndAdmins
}