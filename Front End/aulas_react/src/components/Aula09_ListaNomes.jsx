import { useState } from "react";

const Aula09_ListaNomes = () => {
    const [listaPresenca, setListaPresenca] = useState([]);
    const [nome, setNome] = useState("");
    const [item, setItem] = useState("");

    function botaoAdicionar() {
        if (nome.trim() !== "" && item.trim() !== "") {
            setListaPresenca([...listaPresenca, { nome, item }]);
            setNome("");
            setItem("");
        }
    }

    function botaoExcluir(id) {
        const novaLista = listaPresenca.filter((_, index) => index !== id);
        setListaPresenca(novaLista);
    }

    function limparLista() {
        setListaPresenca([]);
    }

    return (
        <div>
            <h1>Lista de Presença do Churrasco</h1>

            <input
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                placeholder="O que vai levar?"
                value={item}
                onChange={(e) => setItem(e.target.value)}
            />
            <button onClick={botaoAdicionar}>Adicionar</button>
            <button onClick={limparLista}>Limpar Tudo</button>

            <hr />
            {listaPresenca.map((pessoa, index) => (
                <p key={index}>
                    {index + 1}º - {pessoa.nome} - {pessoa.item}
                    <button  onClick={() => botaoExcluir(index)} >
                        Excluir
                    </button>
                </p>
            ))}

            {listaPresenca.length > 0 && (
                <button onClick={limparLista}>
                    Limpar lista
                </button>
            )}
        </div>
    );
}

export default Aula09_ListaNomes;