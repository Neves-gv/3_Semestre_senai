import { useState } from 'react';
import Aula11_produto from './Aula11_produto';

const Aula11_Cadastroprodutos = () => {
    const [listaProdutos, setListaProdutos] = useState([]);
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [img, setImg] = useState('');
    const [link, setLink] = useState('');
    const [categoria, setCategoria] = useState('');
    const [freteGratis, setFreteGratis] = useState(false);

    const adicionarProduto = () => {
        if (!nome || !preco) {
            alert("Preencha os campos obrigatórios!");
            return;
        }
        const novoProduto = {
            id: Date.now(),
            nome,
            preco,
            img,
            link,
            categoria,
            freteGratis
        };
        setListaProdutos([...listaProdutos, novoProduto]);
        setNome('');
        setPreco('');
        setImg('');
        setLink('');
        setCategoria('');
        setFreteGratis(false);
    };

    return (
        <div>
            <h1>Cadastro de Produtos</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                <input type="text" placeholder="Nome"
                    value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="number" placeholder="Preço"
                    value={preco} onChange={(e) => setPreco(e.target.value)} />
                <input type="url" placeholder="URL da Imagem"
                    value={img} onChange={(e) => setImg(e.target.value)} />
                <input type="url" placeholder="Link do produto"
                    value={link} onChange={(e) => setLink(e.target.value)} />
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Selecionar categoria</option>
                    <option value="Limpeza">Produtos de limpeza</option>
                    <option value="Alimentos">Alimentos</option>
                </select>
                <label>
                    <input type="checkbox"
                        checked={freteGratis} onChange={(e) => setFreteGratis(e.target.checked)} />
                    Frete Grátis
                </label>
                <button onClick={adicionarProduto}>Adicionar Produto</button>
            </div>
            <hr />
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {
                    listaProdutos.map((produto) => (
                        <Aula11_produto key={produto.id} novoProduto={produto} />
                    ))
                }
            </div>
        </div>
    );
}

export default Aula11_Cadastroprodutos;