export default function LocalidadeLista() {
    const localidades = [
      { cep: '01001-000', localidade: 'São Paulo' },
      { cep: '20040-000', localidade: 'Rio de Janeiro' },
      { cep: '30110-000', localidade: 'Belo Horizonte' }
    ];
  
    return (
      <div>
        <h2>Localidades Fictícias</h2>
        <ul>
          {localidades.map((l, i) => (
            <li key={i}>{l.cep} - {l.localidade}</li>
          ))}
        </ul>
      </div>
    );
  }
  