const express = require('express')
const router = express.Router();

const { authGuestMiddleware, authMiddleware } = require('../middlewares/auth');

router.get('/', (req, res) => {
    // let categorias = await modelCategoria.findAll();
    let categorias = [
        {
            id: 1,
            nombre: 'Abogado',
            slug: 'abogado',
            image: '/images/img-svg/electricista.svg',
        },
        {
            id: 2,
            nombre: 'Albañil',
            nombre: 'Abogado',
            image: '/images/img-svg/electricista.svg',
        },
        {
            id: 3,
            nombre: 'Arquitecto',
            slug: 'arquitecto',
            image: '/images/img-svg/electricista.svg',
        },
        {
            id: 4,
            nombre: 'Cuidador de Perro',
            slug: 'cuidador-de-perro',
            image: '/images/img-svg/electricista.svg',
        },
        {
            id: 5,
            nombre: 'Electricista',
            slug: 'electricista',
            image: '/images/img-svg/electricista.svg',
        },
    ];
    res.render('index', {
        categorias: categorias
    });
});


router.get('/categorias/:nombreCategoria', async (req, res) => {
    // const categoria = await modelCategoria.findBySlug(req.params.nombreCategoria);
    const categoria = {
        id: 5,
        nombre: 'Electricista',
        slug: 'electricista',
        image: '/images/img-svg/electricista.svg',
    };
    res.render('categoria', {
        categoria,
    });
});




router.get('/guest', authGuestMiddleware, (req, res) => {
    res.render('guest');
});

router.get('/home', authMiddleware, async (req, res) => {
    res.render('home');
});
module.exports = router;
