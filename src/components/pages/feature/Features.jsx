import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Features = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center mt-16 mb-4'>Try our featured items</h1>
            <p className='text-center text-xl font-semibold'>Slide to see more!</p>
            <div className=' w-[98%] mx-auto'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    className='h-96'
                >
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/14935004/pexels-photo-14935004.jpeg" className="w-full h-full" />
                        <p className='absolute left-40 top-4 font-bold text-white text-2xl '>Delicious chicken curry with smashed potato...</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/14841924/pexels-photo-14841924.jpeg" className="w-full h-full" />
                        <p className='absolute left-40 top-4 font-bold text-white text-2xl '>Homemade bun with vagetables inside.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/14792376/pexels-photo-14792376.jpeg" className="w-full h-full" />
                        <p className='absolute left-40 top-4 font-bold text-white text-2xl '>Crispy eggs!</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/9478369/pexels-photo-9478369.jpeg" className="w-full h-full" />
                        <p className='absolute left-40 top-4 font-bold text-white text-2xl '>Muglai with half boiled egg...</p>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
        </div>
    );
};

export default Features;