import { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner'
import axios from 'axios'

const MeusLivros = () => {
  const [resposta, setResposta] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/resposta-gemini')
      .then(res => setResposta(res.data.resposta))
      .catch(err => setResposta('Erro ao buscar resposta'));
  }, []);

  return (
    <div>
      <div className='absolute flex-col gap-4 p-4 text-white'>
        <h1 className='text-3xl font-bold'>Aqui está a sugestão baseada na sua escolha:</h1>
        <p className='text-xl'>{resposta || 'Carregando...'}</p>
      </div>
      <Banner />
    </div>
  )
}

export default MeusLivros