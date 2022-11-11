const express = require('express')
const router = express.Router();

const { authGuestMiddleware, authMiddleware } = require('../middlewares/auth');


router.get('/contrato', (req, res) => {
    res.render('contrato')

});




module.exports = router;
    