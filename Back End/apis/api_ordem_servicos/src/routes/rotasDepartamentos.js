import { Router } from 'express';
import { BD } from '../../db.js';

const router = Router();

// Endpoint para listar todos os departamentos
router.get('/DEPARTAMENTOS', async (req, res) => {
    try {
        const query = `SELECT * FROM DEPARTAMENTOS ORDER BY id_departamento`;
        const resultado = await BD.query(query);

        res.status(200).json(resultado.rows);
    } catch (error) {
        console.error('Erro ao listar Departamentos:', error.message);
        res.status(500).json({ erro: 'Erro ao listar Departamentos' });
    }
});

// Listar todos os departamentos
// router.get('/departamentos', async (req, res) => {
//     try {
//         const query = `SELECT * FROM departamentos ORDER BY id_departamento`;
//         const resultado = await BD.query(query);
//         res.status(200).json(resultado.rows);
//     } catch (error) {
//         console.error('Erro ao listar departamentos:', error.message);
//         res.status(500).json({ erro: 'Erro ao listar departamentos' });
//     }
// });

// Cadastrar um novo departamento
router.post('/departamentos', async (req, res) => {
    const { nome, descricao } = req.body;

    if (!nome) {
        return res.status(400).json({ erro: 'O campo nome é obrigatório' });
    }

    try {
        const comando = `INSERT INTO departamentos(nome, descricao) VALUES($1, $2)`;
        const valores = [nome, descricao];
        await BD.query(comando, valores);
        res.status(201).json({ mensagem: 'Departamento cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar departamento:', error.message);
        res.status(500).json({ erro: 'Erro interno ao cadastrar departamento' });
    }
});

// Atualizar um departamento existente
router.put('/departamentos/:id_departamento', async (req, res) => {
    const { id_departamento } = req.params;
    const { nome, descricao } = req.body;

    if (!nome) {
        return res.status(400).json({ erro: 'O campo nome é obrigatório' });
    }

    try {
        const verificar = await BD.query(`SELECT * FROM departamentos WHERE id_departamento = $1`, [id_departamento]);
        
        if (verificar.rowCount === 0) {
            return res.status(404).json({ erro: 'Departamento não encontrado' });
        }

        const comando = `UPDATE departamentos SET nome = $1, descricao = $2 WHERE id_departamento = $3`;
        const valores = [nome, descricao, id_departamento];
        await BD.query(comando, valores);

        return res.status(200).json({ mensagem: 'Departamento atualizado com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar departamento:', error.message);
        return res.status(500).json({ erro: 'Erro interno ao atualizar departamento' });
    }
});

export default router;