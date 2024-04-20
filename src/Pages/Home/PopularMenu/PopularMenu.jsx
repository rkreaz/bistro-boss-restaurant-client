// import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ItemMenu from '../../Shard/ItemMenu/ItemMenu';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularMenu = data.filter(item => item.category === 'popular');
    //             setMenu(popularMenu);
    //         })
    // }, [])

    
    return (
        <section>
            <SectionTitle
                subHeading='---Check it out---'
                Heading='POPULAR MENU'
            ></SectionTitle>
            <div className='grid grid-cols-2 gap-8 mt-10 mb-8'>
                {popular.map(item => <ItemMenu
                    key={item._id}
                    item={item}
                ></ItemMenu>)}
            </div>
            <div className='text-center mb-16'>
                <button className="btn btn-outline text-[#fff] text-base border-0 border-b-4">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;