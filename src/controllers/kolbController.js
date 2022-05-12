const router = require('express').Router();
const kolbService = require('../services/kolbService');

const getByUser = async(req, res) => {
    const userId = req.params.userId;

    try {
        const kolbs = await kolbService.getByUser(userId);
        res.status(200).json(kolbs);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const createOne = async(req, res) => {
    const content = req.body;
    const userId = req.params.userId;

    try {
        const kolb = await kolbService.createOne(content, userId);
        res.status(201).json(kolb);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

router.get('/:userId', getByUser);
router.post('/:userId', createOne);

module.exports = router;