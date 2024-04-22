import React from 'react';
import ItemMenu from '../Shard/ItemMenu/ItemMenu';
import Cover from '../Shard/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img, button }) => {
    return (
        <div>
            {title && <Cover img={img} title={title} pra={'Would You Like To Try A Dish?'}></Cover>}
            <div className='grid grid-cols-2 gap-8 mt-20 mb-10'>
                {items.map(item => <ItemMenu
                    key={item._id}
                    item={item}
                ></ItemMenu>)}
            </div>
            <Link to={`/shop/${title}`}>
                <div className='text-center mb-24'>
                    <button className="btn btn-outline text-[#fff] text-base border-0 border-b-4 uppercase">{button}</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;