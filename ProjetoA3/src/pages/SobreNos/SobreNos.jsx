import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';

const SobreNos = () => {
  return (
    <div>
      <div className="absolute flex-col gap-4 p-4 text-white">
        <p className="text-black text-2xl font-bold text-left mt-10 mb-10">
          Olá, somos a IBOOKS uma equipe de jovens desenvolvedores apaixonados por tecnologia e livros, nossa missão é
          ajudar você a encontrar o livro perfeito para a sua personalidade, acreditamos que a leitura é uma forma
          poderosa de expandir horizontes e enriquecer vidas.
          <br />
          <br />
          Sabemos como é horrível terminar um livro e ficar com aquela sensação de vazio, por isso, criamos o IBOOKS, um
          site que sugere livros com base na sua personalidade, para que você nunca mais fique sem uma boa leitura.
        </p>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default SobreNos;