import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import blurry from "../../../../src/assets/blurry.svg"
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-16 lg:gap-0 lg:mt-4 mt-2 mb-8 gap-4 lg:items-center'> 
            <div className='lg:h-96 md:h-96  lg:w-4/5 md:w-[75%] mx-auto '>
                <LazyLoadImage className='h-full w-full rounded'
                
                effect='blur' delayTime={6} placeholderSrc={blurry} delayMethod='throttle'
                src='https://i.ibb.co/C0xq3D0/banner.jpg' alt="banner" />
            </div>
            <div className='text-center'>
                <h1 className='text-6xl text-center my-4'>Need <span className='text-red-900'>recipes</span><span className='text-red-600'>?</span> </h1>
                <p className='text-2xl'>Search for Bangladeshi food recipe among thousands of recipes from professionals!</p>
                <Link to="/blog"><button className='btn btn-warning'>Explore </button></Link>
            </div>
            
        </div>
    );
};

export default HomeBanner;