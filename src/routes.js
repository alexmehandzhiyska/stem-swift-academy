const router = require('express').Router();

const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const courseController = require('./controllers/courseController');
const examController = require('./controllers/examController');
const kolbController = require('./controllers/kolbController');

router.use('/auth', authController);
router.use('/users', userController);
router.use('/courses', courseController);
router.use('/exams', examController);
router.use('/notebooks', kolbController);

module.exports = router;