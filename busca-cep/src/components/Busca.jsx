import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios'; 

export default function Busca() {
  const [input, setInput] = useState('');

  const handleBusca = async () => {
    if (!input) {
      alert("Digite um CEP válido!");
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${input}/json/`);

      if (response.data.erro) {
        alert("CEP não encontrado!");
        return;
      }

      console.log(response.data); 

    } catch (error) {
      alert("Erro ao buscar o CEP.");
      console.error(error); 
    }
  };

  return (
    <div className="p-4">
      <InputText
        placeholder="Digite o CEP"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <Button 
        label="Buscar" 
        icon="pi pi-search" 
        onClick={handleBusca} 
        className="mt-2"
      />
    </div>
  );
}
