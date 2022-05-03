const bcrypt = require('bcrypt');
const User = require('../../models/index').User;
const jwtGenerator = require('../utils/jwt');

const register = async(name, email, password, country, city, school, graduationYear) => {
    const decodedPassword = await bcrypt.hash(password, 10);
    const result = await User.create({ name, email, password: decodedPassword, country, city, school, graduation_year: graduationYear });
    const user = result.dataValues;

    const token = jwtGenerator(user.id);
    return { user: { id: user.id, name: user.name, email: user.email, role: user.role }, token };
}

const login = async(email, password) => {
    const response = await User.findOne({ where: { email: email }});

    if (!response) {
        throw new Error('Invalid email or password');
    }
    
    const user = response.dataValues;

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
        throw new Error('Invalid email or password');
    }

    const token = jwtGenerator(user.id);

    return { user: { id: user.id, name: user.name, email: user.email, role: user.role }, token };
}


module.exports = { register, login };