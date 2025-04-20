import { useState } from 'react';
import Busca from './components/Busca';
import LocalidadeLista from './components/LocalidadeLista';

function App() {
  const [localidades, setLocalidades] = useState([]);

  const adicionarLocalidade = (novaLocalidade) => {
    setLocalidades([novaLocalidade, ...localidades]);
  };

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>Hello, P1</h1>
      <Busca onNovaLocalidade={adicionarLocalidade} />
      <LocalidadeLista localidades={localidades} />

    </div>
  );
}

export default App;
