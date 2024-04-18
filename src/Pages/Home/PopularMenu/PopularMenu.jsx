import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ItemMenu from '../../Shard/ItemMenu/ItemMenu';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === 'popular');
                setMenu(popularMenu);
            })
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading='---Check it out---'
                Heading='FROM OUR MENU'
            ></SectionTitle>
            <div className='grid grid-cols-2 gap-8 mt-10 mb-10'>
                {menu.map(item => <ItemMenu
                    key={item._id}
                    item={item}
                ></ItemMenu>)}
            </div>
            <div className='text-center mb-10'>
                <button className="btn btn-outline text-[#fff] text-base border-0 border-b-4">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;