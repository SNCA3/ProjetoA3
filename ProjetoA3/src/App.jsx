import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">SNC</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
        Em manutenção.
      </button>
    </div>
  );
}

function Livros() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Livros</h1>
    </div>
  );
}

export default App
