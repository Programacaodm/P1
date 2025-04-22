import { useState } from 'react';
import Busca from './components/Busca';
import LocalidadeLista from './components/LocalidadeLista';
import Grafico from './components/Grafico';

function App() {
  const [localidades, setLocalidades] = useState([]);

  const adicionarLocalidade = (novaLocalidade) => {
    setLocalidades([novaLocalidade, ...localidades]);
  };

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <div style={{ display: 'flex'}}>        
        <div style={{ flex: 1 }}>
          <h1>Hello, P1</h1>
          <Busca onNovaLocalidade={adicionarLocalidade} />
          <LocalidadeLista localidades={localidades} />
        </div>        
        <div style={{ flex: 1 }}>
            <h1>Gráfico</h1>
            <Grafico localidades={localidades} />
        </div>
      </div>
    </div>
  );
}

export default App;
