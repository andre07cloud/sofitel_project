const User = require('../models/users');
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//LOGIN WITH JWT

const login = async (req, res) => {
    try{
        const user = await User.findOne({ email: req.body.email });

        if(!user){
            console.log("Bad mail!");
            return res.status(401).json({"message": "Wrong credentials!"});
        }
        else{
            
            const hashedPass = cryptoJS.AES.decrypt(
                user.password,
                process.env.PASS_SEC
            );
            const password = hashedPass.toString(cryptoJS.enc.Utf8);
            console.log("ancien password: "+password);
            console.log(req.body.password)
            if(password != req.body.password){
                console.log("Bad Password!");
                return res.status(401).json({"message" : "Wrong credentials!"});
            }
        }
        const maxAge = 3*60*60;
        const accessToken = jwt.sign(
            {
                id : user._id,
                isAdmin : user.isAdmin,
            },
            process.env.JWT_SEC,
            {expiresIn: maxAge },//3hrs in sec,
        );

        user.active = true;
        await user.save();
        res.status(201).json({user, accessToken});
        console.log("LOGIN SUCCESSFULLY!!!");
    }
    catch(err){
        res.status(500).json(err);
        console.log(err);
    }
}

module.exports ={
    login
}