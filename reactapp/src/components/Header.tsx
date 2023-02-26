import React from 'react'
import About from './About'
import Main from './Main'
import Skill from './Skill'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
    return (
        <>        
        <div className='text-gray-700 border-b border-gray-200 sticky top-0 z-50'>
            <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
                <AnchorLink href='#main' offset="50"  className='font-medium text-gray-900 mb-4 md:mb-0'>
                    <span className='text-xl ml-3'>
                        Kaisei.Shiga
                    </span>
                </AnchorLink>
                <ul className='flex md:ml-auto text-base'>
                    <li><AnchorLink href="#about" offset="50" className='mr-5 hover:text-green-600 duration-300'>About</AnchorLink></li>
                    <li><AnchorLink href="#skill" offset="50" className='mr-5 hover:text-green-600 duration-300'>skill</AnchorLink></li>
                    <li><AnchorLink href="#" offset="50" className='mr-5 hover:text-green-600 duration-300'>Contact</AnchorLink></li>
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