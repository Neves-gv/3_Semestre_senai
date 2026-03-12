import { Router } from 'express';
import { BD } from '../../db.js';

const router = Router();

// Endpoint para listar todos os usuários
router.get('/usuarios', async (req, res) => {
    try {
        const query = `SELECT * FROM usuarios ORDER BY id_usuario`;
        const resultado = await BD.query(query);

        res.status(200).json(resultado.rows);
    } catch (error) {
        console.error('Erro ao listar usuários:', error.message);
        res.status(500).json({ erro: 'Erro ao listar usuários' });
    }
});

// end point para adicionar um usuario
// router.post('/usuarios', async (req, res) => {
//         const nome = req.body.nome;
//         const email = req.body.email;
//         const senha = req.body.senha;
//     try {
//         const comando = `INSERT INTO teste (nome, gmail e senha) VALUES('${nome}', '${email}', '${senha}')`
//         console.log(comando);
//         await BD.query(comando);
//         res.status(201).json("Usuario cadrastrado")
//     } catch (error) {
//         console.error('Erro ao cadastrar usuários:', error.message);
//         res.status(500).json({ erro: 'Erro ao cadastrar usuários' });
//     }
// })

//end ponint seguro contra sql injection
router.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const comando = `INSERT INTO USUARIOS(nome, email, senha) VALUES($1, $2, $3)`
        const valores = [nome, email, senha];

        await BD.query(comando, valores);
        console.log(comando, valores);

        res.status(201).json("Usuario cadrastrado")
    } catch (error) {
        console.error('Erro ao cadastrar usuários:', error.message);
        res.status(500).json({ erro: 'Erro ao cadastrar usuários' });
    }
})

router.put('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha } = req.body;
    try {
        const verificarUsuario = await BD.query(`SELECT * FROM usuarios WHERE id_usuario = $1`, [id_usuario]);
        
        if (verificarUsuario.rowCount === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        const comando = `UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id_usuario = $4`;
        const valores = [nome, email, senha, id_usuario];
        await BD.query(comando, valores);

        return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });

    } catch (error) {
        console.error('Erro ao atualizar o usuário:', error.message);
        return res.status(500).json({ error: 'Erro interno ao atualizar o usuário' });
    }
});


export default router;