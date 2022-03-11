const router = require('express').Router();
const courseService = require('../services/courseService');
const lectureService = require('../services/lectureService');

const getAll = async(req, res) => {
    const userId = req.query.userId;

    try {
        const result = await courseService.getAll(userId);

        res.status(200).json({
            status: 'success',
            results: result.length,
            data: {
                courses: result
            }
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

const getOne = async(req, res) => {
    const courseId = req.params.courseId;

    try {
        const result = await courseService.getOne(courseId);

        res.status(200).json({
            status: 'success',
            data: {
                course: {
                    ...result.course,
                    lectures: result.lectures
                }
            }
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

const getLectures = async(req, res) => {
    const userId = req.user.user;

    try {
        const lecturesData = await lectureService.getAll(userId);
        const lectures = lecturesData.rows;

        res.status(200).json({
            status: 'success',
            results: lectures.length,
            data: {
                lectures
            }
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

const getLecture = async(req, res) => {
    const lectureId = req.params.lectureId;

    try {
        const result = await lectureService.getOne(lectureId);

        res.status(200).json({
            status: 'success',
            data: {
                lecture: result.rows[0]
            }
        });
    } catch (error) {
        console.log(error);
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
        console.log(error);
        res.status(400).json(error.message);
    }
}

router.get('/', getAll);
router.get('/lectures', getLectures);
router.get('/:courseId/lectures/:lectureId', getLecture);
router.get('/:courseId', getOne);
router.post('/:courseId/register', registerUser);


module.exports = router;