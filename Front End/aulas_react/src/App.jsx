import Cabecalho from "./components/Cabecalho";
import Aula01 from "./components/Aula01";
import Aula02 from "./components/Aula02";
import Aula03 from "./components/Aula03";
import {estilos} from './style/Estilos.jsx';
import Aula04 from "./components/Aula04.jsx";
import Aula05 from "./components/Aula05.jsx";
import Aula06 from "./components/Aula06.jsx";
import Aula07 from "./components/Aula07.jsx";

const App = () => {
  return (
    <div style={estilos.fundo}>
      <Cabecalho aula='React' />
      <main style={estilos.conteudo}>
        <h2>Aulas</h2>
        <div style={estilos.lista_aula}>
          {/* Componentes das aulas renderizados aqui */}
          <Aula01 />
          <Aula02 />
          <Aula03 />
          <Aula04 />
          <Aula05 />
          <Aula06 />
          <Aula07 />
        </div>
      </main>
    </div>
  );
};

export default App;