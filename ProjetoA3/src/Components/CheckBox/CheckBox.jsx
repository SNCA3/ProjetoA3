import { useState } from 'react';
import { Checkbox } from "primereact/checkbox";
import axios from 'axios';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router';

const MultiSelect = () => {
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  }

  const enviarSelecionados = async () => {
  try {
    const response = await axios.post('http://localhost:3000/pergunte-ao-gemini', {
      selecionados: selected.join(', ')
      
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

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

  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (selected.length > 0) {
      enviarSelecionados();
      navigate('/Meuslivros');
    } else {
      alert('Por favor, selecione pelo menos uma opção.');
    }
  };

  return (
    <div className="absolute flex-col gap-4 p-4">
       
        <h1 className="font-semibold mb-4 text-black justify-center">Sejam Bem-vindos ao IBOOKS</h1>

        <h2 className="font-semibold mb-4 text-black justify-center">Escolha traços de personalidade compatíveis com a sua:</h2>

        <div>
            {options.map((option) => (
            <label key={option} className="flex mb-1 items-left h-1.2rem font-bold text-black"> 
                <Checkbox
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
                
                />
                <span className="text-black text-xs ml-1 mt-1">{option}</span>
            </label>
            ))}
        </div>

        <div className="mt-4">
            <p className="font-semibold mb-4 text-black justify-center">Selecionados: {selected.join(', ') || 'Nenhum'}</p>
            <Button label='Enviar' onClick={handleButtonClick}/>    
        </div>
        </div>
  );
  
}

export default MultiSelect