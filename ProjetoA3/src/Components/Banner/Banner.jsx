import Container from "../Util/Container/Container"

const Banner = () => {
  return (
    <div className="max-w-full w-full min-h-[700px] h-full bg-[#F9FAFB]">
        <Container class_property={'flex items-center justify-center'}>
        <div
          className="inset-0 bg-center bg-no-repeat bg-contain opacity-3 pointer-events-none absolute"
          style={{ backgroundImage: "url('/logoIbooks2.png')" }}
>       </div>
        </Container>
    </div>
  )
}

export default Banner