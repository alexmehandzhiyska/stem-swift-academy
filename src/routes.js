const router = require('express').Router();

const authController = require('./controllers/authController');
const userController = require('./controllers/authController');
const courseController = require('./controllers/courseController');
const examController = require('./controllers/examController');
const studentController = require('./controllers/studentController');
const kolbController = require('./controllers/kolbController');

router.use('/auth', authController);
router.use('/users', userController);
router.use('/courses', courseController);
router.use('/exams', examController);
router.use('/students', studentController);
router.use('/notebooks', kolbController);

module.exports = router;