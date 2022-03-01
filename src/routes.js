const router = require('express').Router();

const authController = require('./controllers/authController');
const courseController = require('./controllers/courseController');
const examController = require('./controllers/examController');
const studentController = require('./controllers/studentController');

router.use('/auth', authController);
router.use('/courses', courseController);
router.use('/exams', examController);
router.use('/students', studentController);

module.exports = router;