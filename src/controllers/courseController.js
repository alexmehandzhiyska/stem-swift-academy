const router = require('express').Router();
const courseService = require('../services/courseService');
const lectureService = require('../services/lectureService');

const getAll = async(req, res) => {
    const userId = req.query.userId;

    try {
        const courses = await courseService.getAll(userId);

        res.status(200).json(courses);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getOne = async(req, res) => {
    const courseId = req.params.courseId;

    try {
        const course = await courseService.getOne(courseId);

        res.status(200).json(course);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

const getLectures = async(req, res) => {
    const userId = req.user.user;

    try {
        const lectures = await lectureService.getAll(userId);

        res.status(200).json(lectures);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getLecture = async(req, res) => {
    const topicId = req.params.topicId;

    try {
        const topic = await lectureService.getOne(topicId);

        res.status(200).json(topic);
    } catch (error) {
        res.status(400).json(error);
    }
}

const registerUser = async(req, res) => {
    const courseId = req.params.courseId;
    let { userId } = req.body;

    try {
        const result = await courseService.registerUser(courseId, userId);

        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

router.get('/', getAll);
router.get('/lectures', getLectures);
router.get('/:courseId/lectures/:topicId', getLecture);
router.get('/:courseId', getOne);
router.post('/:courseId/register', registerUser);


module.exports = router;