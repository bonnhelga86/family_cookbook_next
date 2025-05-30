const router = require('express').Router();
const {
  loginValidator,
  createUserValidator,
} = require('../middlewares/userValidator');

const {
  login,
  createUser,
  logout,
} = require('../controllers/users');

const { auth } = require('../middlewares/auth');
const { NotFoundError } = require('../errors/not-found-error');

router.post('/signin', loginValidator, login);
router.post('/signup', createUserValidator, createUser);
router.use('/recipes', require('./recipes'));

router.use(auth);

router.post('/signout', logout);

router.use('/users', require('./users'));
router.use('/categories', require('./categories'));
router.use('/ingredients', require('./ingredients'));

router.use(() => {
  throw new NotFoundError('Информация по запросу не найдена');
});

module.exports = router;
