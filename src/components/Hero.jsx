import React from 'react'


const Hero = () => {
  return (
    <div name='Home' className='md:flex md:flex-row mt-20'>
        <div className='md:w-2/5 flex flex-col justify-center p-4 text-center md:text-left'>
            <h2 className='font-serif text-5xl sm:text-4xl  text-gray-500 mb-4'>You need it, you want it, you got it.</h2>
            <p className='uppercase text-gray-500 tracking-wide'>Just Shop it</p>
            <button className='bg-gradient-to-r from-purple-600 to-pink-400 rounded-full text-gray-50 py-2 px-8 text-xl uppercase md:self-start my-5'>Shop Now</button>
        </div>
        <div className='md:w-3/5'>
            <img src="https://blush.design/api/download?shareUri=j_ZOKwLO8UdSzG1n&c=Hair_0%7E711515-0.3%7E0f0f0f_Skin_0%7Ec26e5e-0.3%7Eecafa3&w=800&h=800&fm=png" className='w-full' alt="img" />
        </div>
    </div>
  )
}

export default Hero