// backend/routes/users.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users'); // Nosso modelo de usuário
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// @desc    Autenticar um usuário e retornar um token (Login)
// @route   POST /api/users/login
router.post('/login', async (req, res) => {
    try {
        const { email, senha } = req.body;

        // 1. Verificar se o usuário existe no banco de dados
        const user = await User.findOne({ email }).select('+senha');

        if (!user) {
            return res.status(401).json({ success: false, error: 'Credenciais inválidas' });
        }

        // 2. Compara a senha enviada com a senha criptografada no banco
        const isMatch = await bcrypt.compare(senha, user.senha);

        if (!isMatch) {
            return res.status(401).json({ success: false, error: 'Credenciais inválidas' });
        }

        // 3. Se tudo estiver correto, cria o Token (o "passe")
        const payload = {
            id: user._id,
            nome: user.nome,
            nivelAcesso: user.nivelAcesso
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // O token expira em 1 hora
        );

        // 4. Envia a resposta de sucesso com o token
        res.status(200).json({
            success: true,
            token: token,
            user: user
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Erro de Servidor' });
    }
});

router.post('/:id/matricular', async (req, res) => {
    try {
        // O ID do aluno virá da URL, e os IDs das disciplinas do corpo da requisição
        const alunoId = req.params.id;
        const { disciplinaIds } = req.body; // Esperamos um array de IDs

        // 1. Encontra o aluno no banco de dados
        const aluno = await User.findById(alunoId);

        if (!aluno || aluno.nivelAcesso !== 'aluno') {
            return res.status(404).json({ success: false, error: 'Aluno não encontrado' });
        }

        // 2. Atualiza o campo com as novas disciplinas selecionadas
        aluno.disciplinasMatriculadas = disciplinaIds;

        // 3. Salva as alterações no banco de dados
        await aluno.save();

        // 4. Retorna uma resposta de sucesso
        res.status(200).json({ success: true, data: aluno });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Erro de Servidor' });
    }
});

router.post('/:id/disciplinas', async (req, res) => {
    try {
        const { disciplinaId } = req.body; // Esperamos o ID da disciplina no corpo

        // $addToSet garante que o ID só será adicionado se ainda não existir no array
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { disciplinasMatriculadas: disciplinaId } },
            { new: true, runValidators: true } // 'new: true' retorna o documento atualizado
        );

        if (!updatedUser) {
            return res.status(404).json({ success: false, error: 'Usuário não encontrado' });
        }
        res.status(200).json({ success: true, data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Erro de Servidor' });
    }
});

router.get('/me', protect, (req, res) => {
    res.status(200).json({ success: true, data: req.user });
});


router.delete('/:userId/disciplinas/:disciplinaId', async (req, res) => {
    try {
        // $pull remove o ID do array de matrículas
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { disciplinasMatriculadas: req.params.disciplinaId } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ success: false, error: 'Usuário não encontrado' });
        }
        res.status(200).json({ success: true, data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Erro de Servidor' });
    }
});

module.exports = router;