import React from 'react';

const TopViewed = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center mt-16 mb-4'>Top Viewed in this month</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mx-4 gap-2'> 
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='h-96'><img className='' src="https://images.pexels.com/photos/5966431/pexels-photo-5966431.jpeg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-semibold">Vagetable Salad</h2>
                        <p>Vagetable salad with smashed potato...</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='h-96'><img src="https://images.pexels.com/photos/7262911/pexels-photo-7262911.jpeg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-semibold">Arabic Tumatun</h2>
                        <p>Tomato with grilled chicken...</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='h-96'><img src="https://images.pexels.com/photos/7525172/pexels-photo-7525172.jpeg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="tex-xl font-semibold ">Chocokalte Cake</h2>
                        <p>Simple delicious cake with egg and flower...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopViewed;