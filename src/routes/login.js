const express = require('express')
const router = express.Router();

const { authGuestMiddleware, authMiddleware } = require('../middlewares/auth');

router.get('/login', (req, res) => {
    res.render('indexlogin')

});


module.exports = router;
    