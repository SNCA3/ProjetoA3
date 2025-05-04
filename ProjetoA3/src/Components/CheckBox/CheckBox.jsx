import { useState } from 'react';
import { Checkbox } from "primereact/checkbox";

const MultiSelect = () => {
  const [selected, setSelected] = useState([]);

  const options = ['Extrovertido(a)', 'Introvertido(a)', 
    'Comunicativo(a)', 'Reservado(a)', 'Alegre(a)','Entusiasmado(a)',
    'Apático(a)','Empatico(a)','Competitivo(a)','Solitário(a)','Curioso(a)', 
    'Criativo(a)','Aventurerio(a)', 'Intelectual','Cauteloso(a)' ];

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <div className="absolute flex-col gap-4 p-4">
       
        <h1 className="font-semibold mb-4 text-white justify-center">Sejam Bem-vindos ao IBOOKS</h1>

        <h2 className="font-semibold mb-4 text-white justify-center">Escolha traços de personalidade compatíveis com a sua:</h2>

        <div>
            {options.map((option) => (
            <label key={option} className="flex mb-1 items-left h-1.2rem font-bold text-white"> 
                <Checkbox
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
                
                />
                <span className="text-white text-xs">{option}</span>
            </label>
            ))}
        </div>

        <div className="mt-4">
            <p className="font-semibold mb-4 text-white justify-center">Selecionados: {selected.join(', ') || 'Nenhum'}</p>
        </div>
        </div>
  );
}

export default MultiSelect