import React, {useState} from 'react'
import eLogo from '../assests/elogo.jpg'
import { Link, animateScroll as scroll} from 'react-scroll'
import {AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    // const handleClose = () => setNav(!nav)

  return (
    <div className='w-full h-[90px]'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'> 
            <div>
                <img src={ eLogo } width='90px' height='90px' className='max-w-[768px] w-[40px] h-[40px]' alt="LOGO" />
            </div>
                <div className='flex items-center p-4'>
                <ul className='hidden md:flex'>
                <li className='hover: bg-transparent hover:text-purple-600 hover:cursor-default p-2'><Link to="home"smooth={true} duration={500}>Home</Link></li>
                <li className='hover: bg-transparent hover:text-purple-600 hover:cursor-default p-2'><Link to="#"smooth={true} duration={500}>Shop</Link></li>
                <li className='hover: bg-transparent hover:text-purple-600 hover:cursor-default p-2'><Link to="#"smooth={true} duration={500}>Blog</Link></li>
                <li className='hover: bg-transparent hover:text-purple-600 hover:cursor-default p-2'><Link to="#"smooth={true} duration={500}>Contact</Link></li>
                <button className='border-b-2 bg-purple-600 hover:bg-purple-700 p-2 rounded-full px-3 text-gray-50'><AiOutlineShoppingCart className='w-6  inline-block'/>Cart (0)</button>
                {/* <li className='hover: bg-transparent hover:text-purple-600 hover:cursor-default p-2'><Link to="#"smooth={true} duration={500}>Shop</Link></li> */}
                </ul>
            </div>
            <div className='md:hidden mr-4 flex justify-between items-center'>
                <AiOutlineShoppingCart size={20} className='w-10 fill-purple-600'/>
            <div className='md:hidden mr-4 ' onClick={handleClick}>
                {!nav ? <AiOutlineMenu size={20} className='w-5 fill-purple-600'/> : <AiOutlineClose className='w-5'/>}
            </div>
            </div>
        </div>
        <div className='items-center justify-between'>
        <ul className={!nav ? 'hidden' : 'absolute bg-tranparent w-full px-8 '}>
            <li className=' bg-purple-900  text-white'><Link to="home"smooth={true} duration={500}>Home</Link></li>
            <li className=' bg-purple-900  text-white'><Link to="work"smooth={true} duration={500}>Shop</Link></li>
            <li className=' bg-purple-900  text-white'><Link to="work"smooth={true} duration={500}>Blog</Link></li>
            <li className=' bg-purple-900  text-white'><Link to="work"smooth={true} duration={500}>Contact</Link></li>
            {/* <button className='border-b-2 bg-purple-600 hover:bg-purple-400 p-2 rounded-full px-3 text-gray-50'><AiOutlineShoppingCart className='w-5 inline-block'/>Cart (0)</button> */}
        </ul>
        </div>
    </div>
  )
}

export default Navbar