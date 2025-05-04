import MultiSelect from "../CheckBox/CheckBox"
import Container from "../Util/Container/Container"

const Banner = () => {
  return (
    <div className="max-w-full w-full min-h-[650px] h-full bg-[#010203] ">
        <MultiSelect/>
        <Container class_property={'flex items-center justify-center'}>
        <div
          className="fixed inset-0 bg-center bg-no-repeat bg-contain opacity-30 pointer-events-none"
          style={{ backgroundImage: "url('/logoIbooks2.png')" }}
>       </div>
        </Container>
    </div>
  )
}

export default Banner