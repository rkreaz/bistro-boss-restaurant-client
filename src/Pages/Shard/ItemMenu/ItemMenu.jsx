import React from 'react';

const ItemMenu = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className='flex gap-5 justify-center items-center text-[#fff]'>
             <img style={{borderRadius: '0 200px 200px'}} className='w-[100px] h-[90px]' src={image} alt="" />
             <div>
                <h2>{name}----------</h2>
                <p >{recipe}</p>
             </div>
             <p className='text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default ItemMenu;