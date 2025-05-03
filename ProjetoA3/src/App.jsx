
import AppBar from './AppBar';
import CheckBox from "./CheckBox"; 




function App() {
  return (
    
    
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <AppBar />
      
      <h1 className="text-4xl font-bold mb-4" 
      style={{
        textAlign: 'center',
        padding: '5px'
        }}>
        Escolha abaixo, traços de sua personalidade e receba 12 sugestões de livros,</h1>
        <h1 className="text-4xl font-bold mb-4" 
      style={{
        textAlign: 'center',
        padding: '5px'
        }}>
         um para cada mes do ano</h1>
        
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
        Em manutenção.
      </button>
      <CheckBox />
      
    </div>
  );
}



export default App