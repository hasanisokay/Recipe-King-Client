import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleChef = ({ chef }) => {

    const {chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, id}=chef
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='h-72 w-full'><img src={chefPicture} className='object-fill' alt='chef photo' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p> {yearsOfExperience} Years of Experience</p>
                    <p> Number of Recipes: {numberOfRecipes} </p>
                    <p> </p>

                    <div className="card-actions ">
                        <Link to={`/${id}`} ><button className="btn">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;