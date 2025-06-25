

const jwt = require('jsonwebtoken');
const User = require('../models/users');

const protect = async (req, res, next) => {
    let token;


    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {


            token = req.headers.authorization.split(' ')[1];


            const decoded = jwt.verify(token, process.env.JWT_SECRET);




            req.user = await User.findById(decoded.id).select('-senha');

            if (!req.user) {
                return res.status(401).json({ success: false, error: 'Usuário não encontrado' });
            }


            next();

        } catch (error) {

            return res.status(401).json({ success: false, error: 'Não autorizado, token falhou' });
        }
    }


    if (!token) {
        return res.status(401).json({ success: false, error: 'Não autorizado, sem token' });
    }
};

module.exports = { protect };