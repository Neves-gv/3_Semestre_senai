import { estilos } from '../style/estilos';
import { useState } from "react";
import Aula07_perfil from './Aula07_perfil';
import Aula09_Numero from './Aula09_Numero';
import Aula09_ListaNomes from './Aula09_ListaNomes';

const Aula09 = () => {

    const [numerosSorteados, setNumerosSorteados] = useState([10, 43, 28, 2]);

    const [listaPerfil] = useState([
        {
            nome: "João",
            foto: "https://i.pinimg.com/736x/e8/4f/59/e84f599749697a516ed803c3936cc21a.jpg"
        },
        {
            nome: "Maria",
            foto: "https://i.pinimg.com/1200x/5f/bb/d9/5fbbd93883ab47067ecdf4b6f6b2dfee.jpg"
        },
        {
            nome: "Pedro",
            foto: "https://i.pinimg.com/1200x/9f/87/89/9f8789b92561fdb67b76197f5dbaf8e4.jpg"
        }
    ]);

    function botaoSortear() {
        const novoNumero = Math.floor(Math.random() * 60) + 1;
        setNumerosSorteados([...numerosSorteados, novoNumero]);
    }

    function botaoExcluir(nr){
        // Remove todos os números iguais ao clicado
        const novosnumeros = numerosSorteados.filter((numero) => numero !== nr);
        setNumerosSorteados(novosnumeros);
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 09 - Listas em React</h2>
            <h3>Exibindo conteúdos dinamicamente com listas</h3>
            <hr />

            <button onClick={botaoSortear}>
                Sortear um novo número
            </button>

            <h3>Lista de números sorteados</h3>

            {numerosSorteados.map((numero, index) => (
                <Aula09_Numero 
                    key={index} 
                    numero={numero} 
                    // A correção está nesta linha abaixo:
                    excluir={() => botaoExcluir(numero)} 
                />
            ))}

            <hr />

            <h3>Lista de Perfis</h3>

            {listaPerfil.map((perfil, index) => (
                <Aula07_perfil
                    key={index}
                    nome={perfil.nome}
                    foto={perfil.foto}
                />
            ))}

            <hr />
            <Aula09_ListaNomes />
        </div>
    );
}

export default Aula09;