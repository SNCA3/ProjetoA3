import Container from "../Util/Container/Container"

const Footer = () => {
  return (
    <div className="w-full bg-[#ECE0D1] bg-opacity-[20%]">
        <Container class_property={'bg-[#ECE0D1] bg-opacity-[20%] h-20 flex items-center justify-center'}>
            <p className="text-black text-sm">© 2023 IBOOKS. Todos os direitos reservados.</p>
        </Container>
    </div>
  )
}

export default Footer