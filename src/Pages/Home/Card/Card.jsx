import React from 'react';

const Card = ({card}) => {
    const {name, recipe, image} = card;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl border">
                <figure><img className='w-full h-60' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <button className="btn btn-outline text-[#fff] text-base border-0 border-b-4">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;