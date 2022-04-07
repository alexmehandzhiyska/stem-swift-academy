const db = require('../config/database');

const getAll = async() => db.query('SELECT id, name, email, role FROM users');

const getOne = async(userId) => {
    const response = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
    const user = response.rows[0];
    return user;
}

const updateUsers = async(users) => {
    let result = [];

    for (const user of users) {
        const currentUser = await db.query('UPDATE users SET role = $1 WHERE id = $2', [user.role, user.id]);
        result.push(currentUser)
    }

    return result;
}

module.exports = { getAll, getOne, updateUsers };