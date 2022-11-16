const express = require('express')
const router = express.Router();

const { authGuestMiddleware, authMiddleware } = require('../middlewares/auth');

 const modelContrato = require('../models/contrato');

router.get('/', async (req, res) => {
     let propuesta = await modelContrato.getAll();
    // let contratos = {
    //     "Id_contrato": 1,
    //     "Id_servicio": 1,
    //     "Id_usuario": 1,
    // };
    res.render('contrato', {
        contratos: propuesta,
    })
});


router.get('/contrato/:Id_propuesta', async (req, res) => {
    const propuesta = await modelContrato.find(req.params.Id_propuesta);
    res.render('categoria', {
        contratos: propuesta,
    });
});



router.post('', async (req, res) => {
    console.log(req.body);
    res.send('generando contrato');
});




module.exports = router;
    