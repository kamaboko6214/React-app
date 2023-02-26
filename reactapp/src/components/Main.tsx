import React from 'react'

const Main = () => {
  return (
    <section className='text-gray-700' id='main'>
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center'>
            <div className='w-1/2 mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
                <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>
                    Hi!<br />
                I'm Kaisei<br />
                Web Devloper
                </h1>
                <p className='mb-8 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolor sed molestiae nulla repellendus reiciendis illo eius 
                    repudiandae expedita ipsam corrupti.</p>
                <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button>
            </div>
            <div className='w-1/2 lg:max-w-lg w-6/5 '>
                <img src="img/main.jpeg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Main