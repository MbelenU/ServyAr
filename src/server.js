const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const dotenv = require('dotenv');
dotenv.config();

const db = require('./config/db');
const hash = require('./config/hash');
const encrpyt = require('./config/encrypt');

const session = require('express-session');
const cookieParser = require('cookie-parser');
app.use(cookieParser('secret'));
app.use(session({
  cookie: { maxAge: 60000 },
  secret: 'woot',
  resave: false,
  saveUninitialized: false,
}));

// setup forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

let flash = require('connect-flash');
app.use(flash());
const { flashMiddleware, flashHelpersMiddleware } = require('./middlewares/flash');
app.use(flashMiddleware);
app.use(flashHelpersMiddleware);

// public files
app.use(express.static(path.join(__dirname, './public')));

const { authUserMiddleware } = require('./middlewares/auth');
app.use(authUserMiddleware);

// routes
app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/index'));
app.get('/login', require('./routes/login'));
app.get('/registro', require('./routes/registro'));
app.get('/cliente', require('./routes/cliente'));
app.get('/contrato', require('./routes/contrato'));
app.get('/rol', require('./routes/rol'));
app.get('/oferente', require('./routes/oferente'));
app.get('/editarperfil', require('./routes/editarperfil'));
app.get('/contratooferente', require('./routes/contratooferente'));
app.get('/formcontratacion', require('./routes/formcontratacion'));
app.get('/perfiloferente', require('./routes/perfiloferente'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
