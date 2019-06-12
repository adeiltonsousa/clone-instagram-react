const multer = require('multer'); // manipulador para formulários do tipo multipart/form-data 
const path = require('path'); // Evitar incompatibilidade entre sistemas operacionais

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb) {
            cb(null, file.originalname)
        }
    })
};

