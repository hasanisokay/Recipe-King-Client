import React from 'react';

const Features = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center my-8'>Try our featured items...</h1>
            <div className='mx-auto w-[90%] h-96'>
                <div className="carousel w-full h-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://images.pexels.com/photos/14935004/pexels-photo-14935004.jpeg" className="w-full relative" />
                        <p className='absolute left-40 top-4 font-bold text-white text-2xl '>Delicious chicken curry with smashed potato...</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://images.pexels.com/photos/14841924/pexels-photo-14841924.jpeg" className="w-full relative" />
                        <p className='absolute left-40 top-4 font-bold text-white text-2xl '>Homemade bun with vagetables inside.</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://images.pexels.com/photos/14792376/pexels-photo-14792376.jpeg" className="w-full relative" />
                        <p className='absolute left-40 top-4 font-bold text-white text-2xl '>Crispy eggs!</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://images.pexels.com/photos/9478369/pexels-photo-9478369.jpeg" className="w-full relative" />
                        <p className='absolute left-40 top-4 font-bold text-white text-2xl '>Muglai with half boiled egg...</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;