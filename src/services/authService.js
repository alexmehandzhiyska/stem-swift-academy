const bcrypt = require('bcrypt');
const db = require('../config/database');
const jwtGenerator = require('../utils/jwt');

const register = async(name, email, password) => {
    const decodedPassword = await bcrypt.hash(password, 10);

    const result = await db.query(
        'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *', [name, email, decodedPassword, 'student']
    );

    await db.query('INSERT INTO notebooks (user_id) VALUES ($1)', [result.rows[0].id]);

    const user = result.rows[0];

    const token = jwtGenerator(user.id);
    return { user, token };
}

const login = async(email, password) => {
    const response = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = response.rows[0];

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

const getAll = async() => db.query('SELECT id, name, email, role FROM users');

const getOne = async(userId) => {
    const response = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
    const user = response.rows[0];
    return user;
}

const updateUsers = async(users) => {
    for (const user of users) {
        await db.query('UPDATE users SET role = $1 WHERE id = $2', [user.role, user.id]);
    }

    return { status: 'success' }
}

module.exports = { register, login, getAll, getOne, updateUsers };