const multer = require('multer');

//Upload image
function uploadMiddleImage() {

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./public/datas");
        },
        filename: (req, file, cb) => {
            cb(null, "IMG_"+req.headers.type_affichage+"."+file.originalname.split('.').pop());
        },
    });
    const upload = multer({storage : storage});
    return upload;
}
//Upload video
function uploadMiddleVideo() {

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./public/datas");
        },
        filename: (req, file, cb) => {
            cb(null, "VID_"+req.headers.type_affichage+"."+file.originalname.split('.').pop());
        },
    });
    const upload = multer({storage : storage});
    return upload;
}

//Upload file Totem
function uploadMiddleFile() {

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./public/datas");
        },
        filename: (req, file, cb) => {
            cb(null, req.headers.nom_file+'_'+req.headers.type_affichage+"."+file.originalname.split('.').pop());
        },
    });
    const upload = multer({storage : storage});
    return upload;
}

//Upload image salle
function uploadMiddleSalle() {

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./public/datas");
        },
        filename: (req, file, cb) => {
            cb(null, req.headers.nom_image_salle+"."+file.originalname.split('.').pop());
        },
    });
    const upload = multer({storage : storage});
    return upload;
}

//Upload logo client
function uploadMiddleLogo() {

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./public/datas");
        },
        filename: (req, file, cb) => {
            cb(null, req.headers.client_name+"."+file.originalname.split('.').pop());
        },
    });
    const upload = multer({storage : storage});
    return upload;
}

//Upload file for theme
function uploadMiddleThemeFile() {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./public/datas");
        },
        filename: (req, file, cb) => {
            cb(null, req.headers.option+"_."+file.originalname.split('.').pop());
        },
    });
    const upload = multer({storage : storage});
    return upload;
}

module.exports = {
    uploadMiddleImage,
    uploadMiddleVideo,
    uploadMiddleFile,
    uploadMiddleSalle,
    uploadMiddleLogo,
    uploadMiddleThemeFile
}