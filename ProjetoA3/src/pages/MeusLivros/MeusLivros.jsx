import { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import axios from 'axios';
import CardLivro from '../../Components/CardLivro/CardLivro';
import { useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const MeusLivros = () => {
  const location = useLocation();
  const [carregando, setCarregando] = useState(location.state?.carregando || false);
  const [livro, setLivro] = useState(null);
  const [titulosRecomendados, setTitulosRecomendados] = useState([]);

  const buscarNovoLivro = async () => {
    setCarregando(true);
    try {
      const response = await axios.post('http://localhost:3000/pergunte-ao-gemini', {
        titulosRecomendados: titulosRecomendados,
      });

      const regex = /Título: (.*)\nAutor: (.*)\nGênero: (.*)\nSinopse: (.*)/is;
      const match = response.data.resposta.match(regex);

      if (match) {
        const novoLivro = {
          titulo: match[1].trim(),
          autor: match[2].trim(),
          genero: match[3].trim(),
          sinopse: match[4].trim(),
        };

        if (!titulosRecomendados.includes(novoLivro.titulo)) {
          setLivro(novoLivro);
          setTitulosRecomendados((prev) => [...prev, novoLivro.titulo]);
        } else {
          alert('O título já foi recomendado. Tente novamente.');
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    if (location.state?.carregando) {
      buscarNovoLivro();
    }
  }, [location.state]);

  return (
    <div>
      <div className="absolute flex-col gap-4 p-4 text-black container mx-auto">
        <button
          onClick={buscarNovoLivro}
          className="bg-[#ECE0D1] text-black px-4 py-2 mt-2 mb-2 rounded hover:bg-[#d1ada0] transition-colors"
        >
          Buscar Outro Livro
        </button>
        <h1 className="text-3xl font-bold">Aqui está a sugestão baseada na sua personalidade:</h1>
        {carregando ? (
          <p className="text-xl">Carregando...</p>
        ) : livro ? (
          <CardLivro {...livro} />
        ) : (
          <p className="text-xl">Nenhum livro encontrado.</p>
        )}
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default MeusLivros;