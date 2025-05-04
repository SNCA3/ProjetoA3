import './App.css'
import 'primereact/resources/themes/lara-light-blue/theme.css'                
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css';   
import 'tailwindcss/theme.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/Home'
import Navbar from './Components/Navbar/Navbar'
import MeusLivros from './pages/MeusLivros/MeusLivros'
import SobreNos from './pages/SobreNos/SobreNos'

function App() {  
  return( 
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/meuslivros' element={<MeusLivros/>} />
      <Route  path='/sobreNos' element={<SobreNos/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App