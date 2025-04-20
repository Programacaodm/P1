import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Busca() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const handleBusca = () => {
    setResultado(input);
  };

  return (
    <div className="p-4">

        <InputText
          placeholder="Digite algo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

      <Button 
        label="Buscar" 
        icon="pi pi-search" 
        onClick={handleBusca} 
        className="mt-2"
        />

        {resultado && (
            <div className="mt-4">
            <p>Seu Cep é: {resultado}</p>
            </div>
            )
        }
    </div>
  );
}