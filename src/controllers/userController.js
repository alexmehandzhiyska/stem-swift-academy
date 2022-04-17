const router = require('express').Router();
const userService = require('../services/userService');

const getAll = async(req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const role = req.query.role;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    try {
        const users = await userService.getAll(role);
        const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
        const result = {};

        if (endIndex < sortedUsers.length) {
            result.next = true;
        }

        if (startIndex > 0) {
            result.previous = true;
        }

        result.results = sortedUsers.slice(startIndex, endIndex);

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

const getUserExams = async (req, res) => {
    const userId = req.params.userId;
  
    try {
        const exams = await userService.getUserExams(userId);
  
        res.status(200).json(exams);
    } catch (error) {
        console.log(error);
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
router.get('/:userId/exams', getUserExams);

module.exports = router;