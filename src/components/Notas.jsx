import React from 'react'

const Notas = () => {
  return (
    <section className='flex items-center justify-center p-20 md:p-20 bg-gray-100 '>
        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4'>

            <div className='flex justify-between items-center gap-10 border border-gray-400 p-3 duration-300 hover:shadow-grey cursor-default bg-white'>
                <div>
                <img src="./images/propiedades.png" alt="propiedades" />
                <p className='text-sm md:text-base lg:text-lg'>Casas, departamentos, inversiones y mas</p>
                </div>
                <a href="https://www.lanacion.com.ar/" target='blank'>
            <button className='border border-blue-500 text-blue-500 cursor-pointer transition-colors hover:bg-blue-100 rounded px-4 py-2 font-suecaslab1 font-bold text-xs md:text-sm lg:text-base'>IR A NOTAS</button>
          </a>
            </div>

            <div className='flex items-center justify-between gap-10 border border-gray-400 p-3 duration-300 hover:shadow-grey cursor-default bg-white'>
                <div>
                <img src="./images/campo.png" alt="campo" />
                <p className='text-sm md:text-base lg:text-lg'>Agricultura, ganadería, tecnologías y más</p>
                </div>
                <a href="https://www.lanacion.com.ar/" target='blank'>
            <button className='border border-blue-500 text-blue-500 cursor-pointer transition-colors hover:bg-blue-100 rounded px-4 py-2 font-suecaslab1 font-bold text-xs md:text-sm lg:text-base'>IR A NOTAS</button>
          </a>
            </div>

            <div className='flex items-center justify-between gap-10 border border-gray-400 p-3 duration-300 hover:shadow-grey cursor-default bg-white'>
                <div>
                <img src="./images/bienestar.png" alt="bienestar" />
                <p className='text-sm md:text-base lg:text-lg'>Vida sana, nutrición, descanso y más</p>
                </div>
                <a href="https://www.lanacion.com.ar/" target='blank'>
            <button className='border border-blue-500 text-blue-500 cursor-pointer transition-colors hover:bg-blue-100 rounded px-4 py-2 font-suecaslab1 font-bold text-xs md:text-sm lg:text-base'>IR A NOTAS</button>
          </a>
            </div>

            <div className='flex items-center justify-between gap-10 border border-gray-400 p-3 duration-300 hover:shadow-grey cursor-default bg-white'>
                <div>
                <img src="./images/movilidad.png" alt="movilidad" />
                <p className='text-sm md:text-base lg:text-lg'>Tendencias, test drives, eléctricos y más</p>
                </div>
                <a href="https://www.lanacion.com.ar/" target='blank'>
            <button className='border border-blue-500 text-blue-500 cursor-pointer transition-colors hover:bg-blue-100 rounded px-4 py-2 font-suecaslab1 font-bold text-xs md:text-sm lg:text-base'>IR A NOTAS</button>
          </a>
            </div>



        </div>
    </section>
  )
}

export default Notas