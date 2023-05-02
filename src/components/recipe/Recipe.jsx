import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Recipe = ({ recipe }) => {
    const { name, image, description, ingredients, rating } = recipe
    const handleFavourite =()=>{
        console.log("added fav");
        setBtnFavouriteDisable(true)
        Swal.fire(
            'Favourite!',
            'Added to favourite items',
            'success'
          )
    }

    const [btnFavouriteDisable, setBtnFavouriteDisable] = useState(false)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='h-72'><img src={image} className='object-fill w-full h-full' alt="recipe image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div> <span>Ingredients:</span> {ingredients.slice(0,6).map(ingredient => <p>{ingredient}</p> )}</div>
                    <div className="card-actions">
                        <p>Rating: {rating}</p>
                        <button className='btn' disabled={btnFavouriteDisable} onClick={handleFavourite}>Favourite</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recipe;