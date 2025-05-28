import Banner from '../../Components/Banner/Banner'

const MeusLivros = () => {

  
  return (
    <div>
      <div className='absolute flex-col gap-4 p-4 text-white'>
        <h1 className='text-3xl font-bold'>Aqui estão os seus 12 livros baseado na sua escolha:</h1>
        <ul>
          <li className='text-2xl'>1. senhor dos aneis</li>
          <li className='text-2xl'>2. harry potter</li>
          <li className='text-2xl'>3. a guerra dos tronos</li>
          <li className='text-2xl'>4. o hobbit</li>
          <li className='text-2xl'>5. o senhor dos aneis</li>
          <li className='text-2xl'>6. harry potter</li>
          <li className='text-2xl'>7. a guerra dos tronos</li>
          <li className='text-2xl'>8. o hobbit</li>
          <li className='text-2xl'>9. o senhor dos aneis</li>
          <li className='text-2xl'>10. harry potter</li>
          <li className='text-2xl'>11. a guerra dos tronos</li>
          <li className='text-2xl'>12. o hobbit</li>
        </ul>
      </div>
      <Banner />
    </div>
  )
}

export default MeusLivros