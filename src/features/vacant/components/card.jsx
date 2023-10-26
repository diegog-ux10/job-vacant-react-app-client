import React from 'react'

function Card() {
  return (
    <div className='flex shadow-md bg-white'>
      <div className='flex flex-col m-4'>
        <h2 className='text-xl text-blue-500'>React Developer Jr.</h2>
        <span className='font-bold'>IBM</span>
        <label className='text-gray-400'>Ciudad de México</label>
        <p className='my-4 font-semibold'>Se busca Desarrollador Junior en React, con 6 meses de experiencia, que pueda manejar Node.js, Redux, JavaScript y TypeScript</p>
        <span className='text-gray-400 mb-4'>Salario: $1,000 - $1,500</span>
        <a className=' bg-blue-500 rounded-md text-white text-center hover:bg-blue-600 w-1/3'>Aplicar ahora</a>
      </div>
    </div>
  )
}

export default Card