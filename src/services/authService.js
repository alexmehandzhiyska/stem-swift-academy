const bcrypt = require('bcrypt');
const User = require('../../models/index').User;
const jwtGenerator = require('../utils/jwt');

const register = async(name, email, password) => {
    const decodedPassword = await bcrypt.hash(password, 10);
    const result = await User.create({ name, email, password: decodedPassword });
    const user = result.dataValues;

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