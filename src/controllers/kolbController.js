const router = require('express').Router();
const kolbService = require('../services/kolbService');

const getByUser = async(req, res) => {
    const userId = req.params.userId;

    try {
        const result = await kolbService.getByUser(userId);

        res.status(200).json({
            status: 'success',
            results: result.length,
            data: {
                kolbs: result
            }
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

const createOne = async(req, res) => {
    const content = req.body;
    const userId = req.params.userId;

    try {
        const kolb = await kolbService.createOne(content, userId);
        
        res.status(201).json({
            status: 'success',
            results: 1,
            data: {
                kolb
            }
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

// const getOne = async(req, res) => {
//     const courseId = req.params.courseId;

//     try {
//         const result = await courseService.getOne(courseId);

//         res.status(200).json({
//             status: 'success',
//             data: {
//                 course: {
//                     ...result.course,
//                     lectures: result.lectures
//                 }
//             }
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error.message);
//     }
// }



router.get('/:userId', getByUser);
router.post('/:userId', createOne);
// router.get('/:userId/:kolbId', getOne);


module.exports = router;