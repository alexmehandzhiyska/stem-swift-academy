const router = require('express').Router();
const authService = require('../services/authService');

const register = async(req, res) => {
    const { name, email, password } = req.body;

    try {
        const data = await authService.register(name, email, password);
        res.cookie('auth_token', data.token, { httpOnly: true, secure: false });

        res.status(201).json({
            status: 'success',
            data: {
                user: data.user,
            }
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

const login = async(req, res) => {
    const { email, password } = req.body;

    try {
        const data = await authService.login(email, password);

        res.cookie('auth_token', data.token, { httpOnly: true, secure: false });
        res.status(200).json({
            status: 'success',
            data: {
                user: data.user
            }
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getAll = async(req, res) => {
    try {
        const result = await authService.getAll();
        const sortedUsers = result.rows.sort((a, b) => a.name.localeCompare(b.name));

        res.status(200).json({
            status: 'success',
            results: sortedUsers.length,
            data: {
                users: sortedUsers
            }
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getOne = async(req, res) => {
    const userId = req.params.userId;

    try {
        const user = await authService.getOne(userId);

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
        console.log(error);
        res.status(400).json(error.message);
    }
}

const updateUsers = async(req, res) => {
    const { users } = req.body;

    try {
        const result = await authService.updateUsers(users);

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

const logout = (req, res) => {
    res.clearCookie('auth_token');
    res.status(200).json({
        status: 'success'
    });
}

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

router.get('/', getAll);
router.patch('/', updateUsers);
router.get('/:userId', getOne);

module.exports = router;