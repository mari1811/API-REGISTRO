
Contact = require('./usuarioModelo');
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "exito",
            message: "Contactos recuperados exitosamente",
            data: contacts
        });
    });
};

exports.new = function (req, res) {
    var contact = new Contact();
    contact.nombre = req.body.nombre ? req.body.nombre : contact.nombre;
    contact.apellido =req.body.apellido;
    contact.email = req.body.email;
    contact.save(function (err) {

res.json({
            message: 'Usuario creado!',
            data: contact
        });
    });
};
