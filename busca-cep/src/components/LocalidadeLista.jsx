export default function LocalidadeLista({ localidades }) {
    return (
      <div className="mt-4">
        <h2>Localidades encontradas</h2>
  
        {localidades.length === 0 ? (
          <p>Nenhuma localidade buscada ainda.</p>
        ) : (
          <ul>
            {localidades.map((loc, index) => (
              <li key={index}>
                {loc.cep} <br />
                {loc.logradouro} <br />
                {loc.bairro} <br />
                {loc.localidade}/{loc.uf}
                <hr
                  style={{
                    width: '200px',
                    marginLeft: '0',
                    borderTop: '1px solid #ccc',
                  }}
                />
              </li>
            ))}
          </ul>
        )}
  
        {/* 
        const localidadesFicticias = [
          { cep: '01001-000', localidade: 'São Paulo' },
          { cep: '20040-000', localidade: 'Rio de Janeiro' },
          { cep: '30110-000', localidade: 'Belo Horizonte' }
        ];
  
        <h3>Localidades Fictícias</h3>
        <ul>
          {localidadesFicticias.map((l, i) => (
            <li key={i}>{l.cep} - {l.localidade}</li>
          ))}
        </ul>
        */}
      </div>
    );
  }
  