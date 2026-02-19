import { estilos } from '../style/Estilos.jsx';
import Aula07_Muticomponentes, { Meucomponentenomeado, Meucomponentenomeado2, enderecoServidor } from './Aula07_MutiComponentes.jsx';
import Aula07_Perfil from './Aula07_Perfil.jsx';

const Aula07 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 07 -- Importação e exportação de Módulos</h2>
            <h3>Compreendendo Importação e exportação padrão ou nomeada</h3>
            <hr />

            <Aula07_Muticomponentes />
            <Meucomponentenomeado />
            <Meucomponentenomeado2 />
            <p>Servidor: {enderecoServidor}</p>
            <Aula07_Perfil />
        </div>
    );
};

export default Aula07;