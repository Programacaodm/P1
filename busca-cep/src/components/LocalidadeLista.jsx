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
    {
      cep: '04094-050',
      logradouro: 'Avenida Pedro Álvares Cabral',
      bairro: 'Parque Ibirapuera',
      localidade: 'São Paulo',
      uf: 'SP'
    },
    {
      cep: '55592-970',
      logradouro: 'Rua dos Navegantes',
      bairro: 'Vila de Porto de Galinhas',
      localidade: 'Ipojuca',
      uf: 'PE'
    }
  ];

  <h3>Localidades Fictícias</h3>
  <ul>
    {localidadesFicticias.map((l, i) => (
      <li key={i}>
        {l.cep} <br />
        {l.logradouro} <br />
        {l.bairro} <br />
        {l.localidade}/{l.uf}
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
  */}
</div>
  
