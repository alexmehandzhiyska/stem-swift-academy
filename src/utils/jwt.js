const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../config/appConfig')['development'];

const jwtGenerator = (userId) => {
    const payload = {
        user: userId
    };

    return jwt.sign(payload, TOKEN_SECRET, { expiresIn: '24h' });
}

module.exports = jwtGenerator;