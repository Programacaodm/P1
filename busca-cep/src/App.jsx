import { useState } from 'react';
import Busca from './components/Busca';

function App() {
  const [localidades, setLocalidades] = useState([]);

  const adicionarLocalidade = (novaLocalidade) => {
    setLocalidades([novaLocalidade, ...localidades]);
  };

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>Hello, P1</h1>
      <Busca onNovaLocalidade={adicionarLocalidade} />
      
      <ul>
        {localidades.map((loc, index) => (
         
         <li key={index} >
          {loc.cep} <br />
          {loc.logradouro} <br />
          {loc.bairro} <br />
          {loc.localidade}/{loc.uf} <br />
          <hr style={{ width: "200px", marginLeft: "0", borderTop: "1px solid #ccc" }} />
        </li>
        
        ))}
      </ul>
    </div>
  );
}

export default App;
