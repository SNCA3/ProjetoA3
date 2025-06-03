import { FaBookBookmark } from "react-icons/fa6";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
        <div>
        <div className='flex items-center justify-center bg-[#ECE0D1] bg-opacity-[20%]'>
            <img src="/logoIbooks3.png" alt="Logo IBOOKS" className="h-20"/>
            <div className='lg:container max-w-full w-full h-[80px]'>
                <FaBookBookmark className='pi-spin w-1 -ml-3 mt-3' color='black' size={'40'}/>

            </div>
            <nav className='flex items-center justify-center'>
                <NavLink to={'/'} className={({isActive }) => isActive ? 'text-black font-semibold capitalize' : 'text-[#714748] capitalize'}>Página Inicial</NavLink>
                <NavLink to={'/MeusLivros'} className={({isActive }) => isActive ? 'text-black font-semibold capitalize' : 'text-[#714748] capitalize'}>Meus Livros</NavLink>
                <NavLink to={'/SobreNos'} className={({isActive }) => isActive ? 'text-black font-semibold capitalize' : 'text-[#714748] capitalize'}>Sobre nós</NavLink>
            </nav>
        </div>
        </div>
    </div>
  )
}

export default Navbar