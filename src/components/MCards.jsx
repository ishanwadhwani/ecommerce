import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {FiHeart} from 'react-icons/fi'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import d1 from '../assests/dress7.jpg'
import d2 from '../assests/dress8.jpg'
import d3 from '../assests/dress9.jpg'
import d4 from '../assests/dress13.jpg'
import d5 from '../assests/dress11.jpg'
import d6 from '../assests/dress12.jpg'



const MCards = () => {
  return (
    <div className=''>
    <div className='flex flex-row justify-between p-6'>
        <h2 className='text-3xl px-6'>Men's Collection</h2>
        <button className='  flex flex-row px-6'>View All <AiOutlineArrowRight className='h-7 w-3 ml-1'/></button>
    </div>
    {/* <div className='grid grid-flow-row grid-cols-4 gap-10'>
        <div className='shadow-lg'>

        </div>
    </div> */}

    <div className='container mx-auto  py-4 px-4 justify-between items-center bg-white flex flex-row'>
    {/* <div className='flex items-center justify-between p-4 gap-10 '> */}
    <Swiper
        scrollbar={{
            hide: true,
          }}
        // freeMode={true}
        grabCursor={true}
        modules={[Scrollbar]}
        className="mySwiper"
        slidesPerView = {3}
        spaceBetween ={50}
        breakpoints={{
          1440: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 150,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          412: {
            slidesPerView: 2,
            spaceBetween: 200,
          },
          390: {
            slidesPerView: 2,
            spaceBetween: 220,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
        <div className='card bg-gray-100'>
            <img src={ d1 } className='w-full h-full object-cover transition ease-in-out delay-150 hover:translate-x-0.7 hover:scale-110 duration-300' alt="dress" />
            <div className='p-5 flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <span className='title'>In Stock</span>
                    <span className='title'>Official Store</span>
                    <span className='title'>Only few left!</span>
                </div>
                <h2 className='product-title font-semibold' title='Evenng Gown'>ZARA</h2>
                <div className='flex flex-row justify-between'>
                    <span className='text-xl font-bold '>₹ 9599.00</span>
                    <div className='flex items-center gap-2 mt-1'>
                        <span className='text-sm line-through opacity-50 '>₹ 14999.00</span>
                        <span className='discount'>36% off</span>
                </div>
                </div>
                <div className= 'mt-5 flex gap-2'>
                    <button className='tracking-wider bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-md text-white font-medium transition'>Add to cart</button>
                    <FiHeart size={30} className='button-icon hover:fill-red-900'/>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card bg-gray-100'>
            <img src={ d2 } className='w-full h-full object-cover transition ease-in-out delay-150 hover:translate-x-0.7 hover:scale-110 duration-300' alt="dress" />
            <div className='p-5 flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <span className='title'>In Stock</span>
                    <span className='title'>Official Store</span>
                    <span className='title'>Only few left!</span>
                </div>
                <h2 className='product-title font-semibold' title='Evenng Gown'>ZARA</h2>
                <div className='flex flex-row justify-between'>
                    <span className='text-xl font-bold '>₹ 9599.00</span>
                    <div className='flex items-center gap-2 mt-1'>
                        <span className='text-sm line-through opacity-50 '>₹ 14999.00</span>
                        <span className='discount'>36% off</span>
                </div>
                </div>
                <div className= 'mt-5 flex gap-2'>
                    <button className='tracking-wider bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-md text-white font-medium transition'>Add to cart</button>
                    <FiHeart size={30} className='button-icon hover:fill-red-900'/>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card bg-gray-100'>
            <img src={ d6 } className='w-full h-full object-cover transition ease-in-out delay-150 hover:translate-x-0.7 hover:scale-110 duration-300' alt="dress" />
            <div className='p-5 flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <span className='title'>In Stock</span>
                    <span className='title'>Official Store</span>
                    <span className='title'>Only few left!</span>
                </div>
                <h2 className='product-title font-semibold' title='Evenng Gown'>ZARA</h2>
                <div className='flex flex-row justify-between'>
                    <span className='text-xl font-bold '>₹ 9599.00</span>
                    <div className='flex items-center gap-2 mt-1'>
                        <span className='text-sm line-through opacity-50 '>₹ 14999.00</span>
                        <span className='discount'>36% off</span>
                </div>
                </div>
                <div className= 'mt-5 flex gap-2'>
                    <button className='tracking-wider bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-md text-white font-medium transition'>Add to cart</button>
                    <FiHeart size={30} className='button-icon hover:fill-red-900'/>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card bg-gray-100'>
            <img src={ d4 } className='w-full h-full object-cover transition ease-in-out delay-150 hover:translate-x-0.7 hover:scale-110 duration-300' alt="dress" />
            <div className='p-5 flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <span className='title'>In Stock</span>
                    <span className='title'>Official Store</span>
                    <span className='title'>Only few left!</span>
                </div>
                <h2 className='product-title font-semibold' title='Evenng Gown'>ZARA</h2>
                <div className='flex flex-row justify-between'>
                    <span className='text-xl font-bold '>₹ 9599.00</span>
                    <div className='flex items-center gap-2 mt-1'>
                        <span className='text-sm line-through opacity-50 '>₹ 14999.00</span>
                        <span className='discount'>36% off</span>
                </div>
                </div>
                <div className= 'mt-5 flex gap-2'>
                    <button className='tracking-wider bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-md text-white font-medium transition'>Add to cart</button>
                    <FiHeart size={30} className='button-icon hover:fill-red-900'/>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card bg-gray-100'>
            <img src={ d3 } className='w-full h-full object-cover transition ease-in-out delay-150 hover:translate-x-0.7 hover:scale-110 duration-300' alt="dress" />
            <div className='p-5 flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <span className='title'>In Stock</span>
                    <span className='title'>Official Store</span>
                    <span className='title'>Only few left!</span>
                </div>
                <h2 className='product-title font-semibold' title='Evenng Gown'>ZARA</h2>
                <div className='flex flex-row justify-between'>
                    <span className='text-xl font-bold '>₹ 9599.00</span>
                    <div className='flex items-center gap-2 mt-1'>
                        <span className='text-sm line-through opacity-50 '>₹ 14999.00</span>
                        <span className='discount'>36% off</span>
                </div>
                </div>
                <div className= 'mt-5 flex gap-2'>
                    <button className='tracking-wider bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-md text-white font-medium transition'>Add to cart</button>
                    <FiHeart size={30} className='button-icon hover:fill-red-900'/>
                </div>
            </div>
        </div>
        </SwiperSlide>
        </Swiper>
    </div>
    {/* </div> */}
  </div>
  )
}

export default MCards