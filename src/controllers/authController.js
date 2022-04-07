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

const logout = (req, res) => {
    res.clearCookie('auth_token');
    res.status(200).json({
        status: 'success'
    });
}

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;