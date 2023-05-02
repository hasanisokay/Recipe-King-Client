import React from 'react';

const HomeBanner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-0 mt-4 mb-8 gap-2 items-center '> 
            <div className='h-96 lg:w-4/5'>
                <img className='h-full w-full rounded' src='https://images.pexels.com/photos/4784055/pexels-photo-4784055.jpeg' alt="" />
            </div>
            <div className='text-center'>
                <h1 className='text-6xl text-center'>Need <span className='text-red-900'>recipes</span><span className='text-red-600'>?</span> </h1>
                <p className='text-2xl'>Search among thousands of recipes from professional sheffs all over the world!</p>
            </div>
            
        </div>
    );
};

export default HomeBanner;