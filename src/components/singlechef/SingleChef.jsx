import React from 'react';
import { Link, useParams } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SingleChef = ({ chef }) => {

    const {chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, id}=chef
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            {/*  */}
                <figure className='h-72 w-full'>
                <LazyLoadImage  src={chefPicture} className='object-fill'  
                effect='blur' delayTime={6} placeholderSrc='https://cdn.pixabay.com/photo/2015/06/24/02/12/the-blurred-819388_960_720.jpg' delayMethod='throttle'
                
                loading='lazy' alt='chef photo' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p> {yearsOfExperience} Years of Experience</p>
                    <p> Number of Recipes: {numberOfRecipes} </p>
                    <p> Likes: {likes} </p>

                    <div className="card-actions ">
                        <Link to={`/${id}`} ><button className="btn">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;