import { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import axios from 'axios';
import { useNavigate } from 'react-router';

const MultiSelect = () => {
  const [selected, setSelected] = useState([]);

  const minhaPersonalidade = selected.join(', ');

  const enviarSelecionados = async () => {
    try {
      const response = await axios.post('http://localhost:3000/pergunte-ao-gemini', {
        minhaPersonalidade: minhaPersonalidade,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const options = [
    'Extrovertido(a)',
    'Introvertido(a)',
    'Comunicativo(a)',
    'Reservado(a)',
    'Alegre(a)',
    'Entusiasmado(a)',
    'Apático(a)',
    'Empatico(a)',
    'Competitivo(a)',
    'Solitário(a)',
    'Curioso(a)',
    'Criativo(a)',
    'Aventurerio(a)',
    'Intelectual',
    'Cauteloso(a)',
  ];

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
      navigate('/Meuslivros', { state: { carregando: true } });
    } else {
      alert('Por favor, selecione pelo menos uma opção.');
    }
  };

  return (
    <div className="absolute flex-col gap-4 p-4">
      <h1 className="font-semibold mb-4 text-black justify-center">Sejam Bem-vindos ao IBOOKS</h1>
      <h2 className="font-semibold mb-4 text-black justify-center">
        Iremos recomendar livros com base na sua personalidade, selecione as opções com que se identifica:
      </h2>
      <div>
        {options.map((option) => (
          <label key={option} className="flex mb-1 items-left h-1.2rem font-bold text-black">
            <Checkbox checked={selected.includes(option)} onChange={() => toggleOption(option)} />
            <span className="text-black text-xs ml-1 mt-1">{option}</span>
          </label>
        ))}
      </div>
      <div className="mt-4">
        <p className="font-semibold mb-4 text-black justify-center">
          Selecionados: {selected.join(', ') || 'Nenhum'}
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-[#ECE0D1] text-black px-4 py-2 rounded hover:bg-[#D1B6A0] transition-colors"
        >
          Buscar Livro
        </button>
      </div>
    </div>
  );
};

export default MultiSelect;