const router = require('express').Router();
const userService = require('../services/userService');

const getAll = async(req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    try {
        const users = await userService.getAll();
        const sortedUsers = users.rows.sort((a, b) => a.name.localeCompare(b.name));
        const result = sortedUsers.slice(startIndex, endIndex)

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getOne = async(req, res) => {
    const userId = req.params.userId;

    try {
        const user = await userService.getOne(userId);

        res.status(200).json({
            status: 'success',
            data: {
                user: {
                    email: user.email,
                    name: user.name,
                }
            }
        })
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateRoles = async(req, res) => {
    const { users } = req.body;

    try {
        const result = await userService.updateUsers(users);

        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

router.get('/', getAll);
router.patch('/', updateRoles);
router.get('/:userId', getOne);

module.exports = router;