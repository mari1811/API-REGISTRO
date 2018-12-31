
let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

var usuarioControlador = require('./usuarioControlador');

router.route('/contacts')
    .get(usuarioControlador.index)
    .post(usuarioControlador.new);
router.route('/contacts/:contact_id')


module.exports = router;
