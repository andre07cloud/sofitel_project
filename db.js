const Role = require('./src/models/roles');
const User = require('./src/models/users');
const cryptoJS = require('crypto-js');
const mongoose = require('mongoose');

module.exports =  async function connection(){
    try {
        mongoose.Promise = global.Promise;
        mongoose.connect(process.env.MONG0_URL, {
        user: process.env.DBUSERNAME, 
        pass: process.env.DBPWD,   
        useNewUrlParser: true,
        useUnifiedTopology: true,

        });
        console.log('base de données créée avec succès ');
        //Create a first super user automatically

        db =  mongoose.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", () => {
            console.log('mongodb running...');
            //create super user
            User.findOne({role: Role.root}, (err, user) => {

                if (err){
                      console.log('err');
                      console.log(err)
                  } 
                  else {
          
                      if(user==null)
                      {
                          let data = {};
                              data.email= "superadmin@sofitel.com";
                              data.firstName= "SOFITEL";
                              data.lastNme= "SOFITEL";
                              data.password= cryptoJS.AES.encrypt(process.env.SUPER_SEC, process.env.PASS_SEC).toString();
                              data.role= Role.root;
                              data.isAdmin= true;
                              data.token = null;
                              data.displayName= data.firstName + ' ' + data.lastName;
                          let user = new User(data);
                          
                              // Then save the user
                              user.save((err) =>{
                                  if (err) {
                                      console.log(err);
                                  } else {
                                      console.log('Super Admin compte created')
                                  }
                              });
                      }
                      else
                      {
                          console.log('Super Admin compte existe')
                          return true;
                          
                      }
                  }
              });
            
        });

        
    } catch (error) {
        console.log(error);
        console.log('Could not connect to database!');
    }
}