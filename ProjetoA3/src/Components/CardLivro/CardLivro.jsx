
const CardLivro = ({ titulo, autor, genero, sinopse }) => (
  <div className="bg-[#ECE0D1] px-6 py-4 mt-2 absolute rounded shadow">
    <h2 className="text-xl font-bold mb-2">{titulo}</h2>
    <p className="mb-1"><strong>Autor:</strong> {autor}</p>
    <p className="mb-1"><strong>Gênero:</strong> {genero}</p>
    <p className="mt-2"><strong>Sinopse:</strong> {sinopse}</p>
  </div>
);

export default CardLivro;