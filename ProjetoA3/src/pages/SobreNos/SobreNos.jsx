import Banner from "../../Components/Banner/Banner"

const SobreNos = () => {
  return (
    <div>
        <div className="absolute flex-col gap-4 p-4 text-white">
        <p className="text-white text-2xl font-bold text-center mt-10 mb-10">
            Olá, somos a SNC (Só nos commits) uma equipe de jovens desenvolvedores apaixonados por tecnologia e livros, 
            nossa missão é ajudar você a encontrar o livro perfeito para a sua personalidade, 
            acreditamos que a leitura é uma forma poderosa de expandir horizontes e enriquecer vidas.
            <br />
            <br />
            Sabemos como é horrivel terminar um livro e ficar com aquela sensação de vazio,
            por isso, criamos o IBOOKS, um aplicativo que sugere livros com base na sua personalidade,
            para que você nunca mais fique sem uma boa leitura.
        </p>
    </div>
        <Banner />
    </div>
  )
}

export default SobreNos