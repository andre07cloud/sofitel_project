
const Theme = require('../models/themes');
const fs = require('fs');

const createTheme = async (themeBody) => {

    if(themeBody.code == '2V'){
        themeBody.t1 = '/datas/'+'t1_'+'.'+themeBody.extension_t1;
        themeBody.t2 = '/datas/'+'t2_'+'.'+themeBody.extension_t2;
    };
    if(themeBody.code == '2H'){
        themeBody.t1 = '/datas/'+'t1_'+'.'+themeBody.extension_t1;
        themeBody.t2 = '/datas/'+'t2_'+'.'+themeBody.extension_t2;
    };
    if(themeBody.code == '3'){
        themeBody.t1 = '/datas/'+'t1_'+'.'+themeBody.extension_t1;
        themeBody.t2 = '/datas/'+'t2_'+'.'+themeBody.extension_t2;
        themeBody.t3 = '/datas/'+'t3_'+'.'+themeBody.extension_t3;
    };
    if(themeBody.code == '4'){
        themeBody.t1 = '/datas/'+'t1_'+'.'+themeBody.extension_t1;
        themeBody.t2 = '/datas/'+'t2_'+'.'+themeBody.extension_t2;
        themeBody.t3 = '/datas/'+'t3_'+'.'+themeBody.extension_t3;
        themeBody.t4 = '/datas/'+'t4_'+'.'+themeBody.extension_t4;
    };
    const themes = await Theme.find();
    if(themes.length==0){
        const theme = await Theme.create(themeBody);
        setTimeout( async() => {
            const data = await Theme.find();
            try{
                fs.writeFileSync("./public/datas/theme.cfg", JSON.stringify(data));
                console.log({"message":"data appened in file successfuly!!!"});
            }
            catch(err){
                console.log({"message":"appending data failed!!!"});
                console.log(err);
            }
        }, 3000 );
        return theme;
    }
    else{
        const theme = await Theme.findByIdAndUpdate(
            themes[0].id,
            {$set: themeBody},
            {new : true}
        );
        setTimeout( async() => {
            const data = await Theme.find();
            try{
                fs.writeFileSync("./public/datas/theme.cfg", JSON.stringify(data));
                console.log({"message":"data appened in file successfuly!!!"});
            }
            catch(err){
                console.log({"message":"appending data failed!!!"});
                console.log(err);
            }
        }, 3000 );
        return theme;
    }
    

    
}



module.exports = {
    createTheme,
}