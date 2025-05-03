import { useState } from 'react';

export default function MultiSelect() {
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
    <div className="p-4">
       
      <h2 className="text-xl font-semibold mb-4">Fale mais sobre vc:</h2>

      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggleOption(option)}
              className="form-checkbox h-5 w-5 text-white bg-gray-300 
             checked:bg-blue-600 border-2 border-gray-400 
             rounded-lg transition-all duration-300 ease-in-out "
              
            />
            <span className="text-gray-800">{option}</span>
          </label>
        ))}
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">Selecionados: {selected.join(', ') || 'Nenhum'}</p>
      </div>
    </div>
  );
}
