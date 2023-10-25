import React from 'react';

function Tailwind() {
    // Aquí puedes usar las props pasadas al componente
    // Puedes renderizar elementos JSX y lógica aquí
    return (
        <div className='bg-gray-600 text-white'>
            <h1 className=' text-gray-400 font-bold text-xl '>Hola Mundo</h1>
            <p className='text-slate-300 font-semibold text-base'>
                Sean Bienvenidos a la Pagina Principal de mi Pagina Web
            </p>

            <section className='grid grid-cols-3 gap-6 m-5 pb-5'>
                <article>
                    <h2>Titulo 01</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum quod, ratione recusandae molestias eligendi voluptates quos facere, debitis possimus quia doloribus fugit velit molestiae commodi veniam aspernatur, quidem ullam!
                    </p>
                </article>
                <article>
                    <h2>Titulo 02</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum quod, ratione recusandae molestias eligendi voluptates quos facere, debitis possimus quia doloribus fugit velit molestiae commodi veniam aspernatur, quidem ullam!
                    </p>
                </article>
                <article>
                    <h2>Titulo 03</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum quod, ratione recusandae molestias eligendi voluptates quos facere, debitis possimus quia doloribus fugit velit molestiae commodi veniam aspernatur, quidem ullam!
                    </p>
                </article>
            </section>
        </div>
    );
}

export default Tailwind;
