import { Router } from 'express';
import { BD } from '../../db.js';

const router = Router();

// router.get('/ordem_servicos', async (req, res) => {
    //     try {
        //         const query = `SELECT * FROM ORDEM_SERVICOS ORDER BY id_ordem`;
        //         const resultado = await BD.query(query);
        
//         res.status(200).json(resultado.rows);
//     } catch (error) {
    //         console.error('Erro ao listar Departamentos:', error.message);
//         res.status(500).json({ erro: 'Erro ao listar Departamentos' });
//     }
// });

router.post('/ordem_servicos', async (req, res) => {
    const { numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento } = req.body;

    if (!numero_ordem || !titulo || !id_usuario || !id_departamento) {
        return res.status(400).json({ erro: 'Campos obrigatórios ausentes' });
    }

    try {
        const comando = `INSERT INTO ordem_servicos (numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
        const valores = [numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento];
        
        await BD.query(comando, valores);
        res.status(201).json({ mensagem: 'Ordem de serviço cadastrada com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar ordem de serviço:', error.message);
        res.status(500).json({ erro: 'Erro interno ao cadastrar ordem de serviço' });
    }
});

// Endpoint para atualizar uma Ordem de Serviço existente
router.put('/ordem_servicos/:id_ordem', async (req, res) => {
    const { id_ordem } = req.params;
    const { numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento } = req.body;

    try {
        const verificar = await BD.query(`SELECT id_ordem FROM ordem_servicos WHERE id_ordem = $1`, [id_ordem]);
        
        if (verificar.rowCount === 0) {
            return res.status(404).json({ erro: 'Ordem de serviço não encontrada' });
        }

        const comando = `UPDATE ordem_servicos SET numero_ordem = $1, titulo = $2, descricao = $3, prioridade = $4, status = $5, data = $6, id_usuario = $7, id_departamento = $8 WHERE id_ordem = $9`;
        const valores = [numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento, id_ordem];
        
        await BD.query(comando, valores);
        return res.status(200).json({ mensagem: 'Ordem de serviço atualizada com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar ordem de serviço:', error.message);
        return res.status(500).json({ erro: 'Erro interno ao atualizar ordem de serviço' });
    }
});

export default router;