
var mongoose = require('mongoose');
var usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

});

var Contact = module.exports = mongoose.model('usuario', usuarioSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}
