// backend/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/users');

// O 'protect' é a nossa função de middleware
const protect = async (req, res, next) => {
    let token;

    // 1. Verificamos se o cabeçalho de autorização existe e começa com "Bearer"
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // 2. Pegamos apenas o token, ignorando a palavra "Bearer "
            // Ex: "Bearer eyJhbGci..." -> "eyJhbGci..."
            token = req.headers.authorization.split(' ')[1];

            // 3. Verificamos se o token é válido usando nosso segredo
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // 4. Se for válido, pegamos o ID do usuário de dentro do token,
            //    buscamos o usuário no banco de dados e o anexamos ao objeto 'req'.
            //    O .select('-senha') garante que a senha não seja incluída.
            req.user = await User.findById(decoded.id).select('-senha');

            if (!req.user) {
                return res.status(401).json({ success: false, error: 'Usuário não encontrado' });
            }

            // 5. Se tudo deu certo, chamamos next() para passar para a próxima função (a lógica da rota /me)
            next();

        } catch (error) {
            // Se o token expirou ou é inválido, jwt.verify dará um erro
            return res.status(401).json({ success: false, error: 'Não autorizado, token falhou' });
        }
    }

    // Se não houver nenhum token no cabeçalho
    if (!token) {
        return res.status(401).json({ success: false, error: 'Não autorizado, sem token' });
    }
};

module.exports = { protect };