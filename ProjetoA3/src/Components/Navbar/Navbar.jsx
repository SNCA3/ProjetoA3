import { FaBookBookmark } from "react-icons/fa6";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
        <div>
        <div className='flex items-center justify-center bg-[#010203] bg-opacity-[20%]'>
            <div className='lg:container max-w-full w-full h-[80px]'>
                <FaBookBookmark className='pi-spin w-1' color='white' size={'40'} style={{margin:'5px'}}/>
                <img src="/logoIbooks.png" alt="Logo IBOOKS" className="w-20 h-20 mx-3 -mt-4"/>
            </div>
            <nav className='flex items-center justify-center'>
                <NavLink to={'/Home'} className={({isActive }) => isActive ? 'text-white font-semibold capitalize' : 'text-[#d3d3d3] capitalize'}>Página Inicial</NavLink>
                <NavLink to={'/MeusLivros'} className={({isActive }) => isActive ? 'text-white font-semibold capitalize' : 'text-[#d3d3d3] capitalize'}>Meus Livros</NavLink>
                <NavLink to={'/SobreNos'} className={({isActive }) => isActive ? 'text-white font-semibold capitalize' : 'text-[#d3d3d3] capitalize'}>Sobre nós</NavLink>
            </nav>
        </div>
        </div>
    </div>
  )
}

export default Navbar