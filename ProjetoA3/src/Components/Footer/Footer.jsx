import Container from "../Util/Container/Container";
import { FaBookBookmark } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full min-h-[80px] h-full flex items-center justify-center bg-[#ECE0D1]">
      <Container>
        <div className="w-full flex items-center justify-end">
          <FaBookBookmark className="pi-spin w-1 -ml-3" color="black" size="40" />
          <p className="text-black text-sm ml-2">
            © 2025 IBOOKS. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;