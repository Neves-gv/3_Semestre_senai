import express from 'express';
import {BD, testarConexao} from "./db.js"
const app = express();
app.get('/', async(req, res) => {
    await BD.testarConexao();
    res.status(200).jason('Api funcionado');
});

const porta = 3000;
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);
    
})