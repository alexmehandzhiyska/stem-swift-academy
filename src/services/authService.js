const bcrypt = require('bcrypt');
const db = require('../config/database');
const User = require('../models/User');
const jwtGenerator = require('../utils/jwt');

const register = async(name, email, password) => {
    const decodedPassword = await bcrypt.hash(password, 10);

    const result = await User.create({ name, email, password: decodedPassword });
    const user = result.dataValues;

    // await db.query('INSERT INTO notebooks (user_id) VALUES ($1)', [user.id]);

    const token = jwtGenerator(user.id);
    return { user, token };
}

const login = async(email, password) => {
    const response = await User.findOne({ where: { email: email } });
    const user = response.dataValues;

    if (!user) {
        throw new Error('Invalid username or password');
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
        throw new Error('Invalid username or password');
    }

    const token = jwtGenerator(user.id);

    return { user, token };
}


module.exports = { register, login };