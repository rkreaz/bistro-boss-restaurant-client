import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import Card from '../Card/Card';

const Cards = () => {
    const [menu] = useMenu([]);
    const popular = menu.filter(item => item.category === 'popular')
    
    return (
        <div>
            <SectionTitle
                subHeading={'Should Try'}
                Heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className='mt-10 grid grid-cols-3 gap-8 mb-32 text-[#fff]'>
               {
                 popular.slice(0, 3).map(card => <Card key={card._id} card={card}></Card>)
               }
            </div>
        </div>
    );
};

export default Cards;