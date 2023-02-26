import React from 'react'
import About from './About'
import Main from './Main'
import Skill from './Skill'

const Header = () => {
    return (
        <>        <div className='text-gray-700 border-b border-gray-200'>
            <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
                <a href="#"  className='font-medium text-gray-900 mb-4 md:mb-0'>
                    <span className='text-xl ml-3'>
                        Kaisei.Shiga
                    </span>
                </a>
                <ul className='flex md:ml-auto text-base'>
                    <li><a href="#about" className='mr-5 hover:text-green-600 duration-300'>About</a></li>
                    <li><a href="#skill" className='mr-5 hover:text-green-600 duration-300'>skill</a></li>
                    <li><a href="#" className='mr-5 hover:text-green-600 duration-300'>Contact</a></li>
                </ul>
            </div>
        </div>
        <Main />
        <About />
        <Skill />
        </>
    )
}

export default Header