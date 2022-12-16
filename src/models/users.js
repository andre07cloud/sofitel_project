const mongoose = require('mongoose');
const Role = require('./roles');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    firstName:{
        type: String, maxlength:50, trim: true
    },
    lastName:{
        type: String, maxlength:50, trim: true
    },
    email:{
        type: String, required: true, unique:true, trim: true
    },
    password : {
        type: String, required: true
    },
    isAdmin : {
        type: Boolean, default: false
    },
    role:{
        type: String, required:true,
        default: Role.user, 
        enum:[Role.root, Role.admin, Role.user],
        trim: true
    },
    avatar: {
        type: String, default:'/datas/avatar.png', trim: true
    },
    active: {
        type: Boolean,
        default: false
    },
    _creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);