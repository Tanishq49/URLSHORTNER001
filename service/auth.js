const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function setUser(user) {
    return jwt.sign({
        id: user.id,
        email: user.email,
    }, process.env.SECRET_KEY);
}

function getUser(token) {
    try {
        if (!token) {
            return null;
        }
        return jwt.verify(token, process.env.SECRET_KEY);
    } catch (err) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}
