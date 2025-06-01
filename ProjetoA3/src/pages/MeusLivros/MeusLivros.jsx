import { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner'
import axios from 'axios'
import CardLivro from '../../Components/CardLivro/CardLivro';

const MeusLivros = () => {
  const [resposta, setResposta] = useState('');
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/resposta-gemini')
      .then(res => {
        setResposta(res.data.resposta);
        const regex = /Título: (.*)\nAutor: (.*)\nGênero: (.*)\nSinopse: (.*)/is;
        const match = res.data.resposta.match(regex);
        if (match) {
          setLivro({
            titulo: match[1].trim(),
            autor: match[2].trim(),
            genero: match[3].trim(),
            sinopse: match[4].trim(),
          });
        }
      })
      .catch(err => setResposta('Erro ao buscar resposta'));
  }, []);

  return (
    <div>
      <div className='absolute flex-col gap-4 p-4 text-black '>
        <h1 className='text-3xl font-bold '>Aqui está a sugestão baseada na sua escolha:</h1>
        {livro ? (
          <CardLivro {...livro} />
        ) : (
          <p className='text-xl '>{resposta || 'Carregando...'}</p>
        )}
      </div>
      <Banner />
    </div>
  )
}

export default MeusLivros