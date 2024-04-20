import React from 'react';
import Cover from '../Shard/Cover/Cover';
import ourShopImg from '../../assets/shop/banner2.jpg'

const OurShop = () => {
    return (
        <div>
           <Cover img={ourShopImg} title={'OUR SHOP'} pra={'WOULD YOU LIKE TO TRY A DISH?'}></Cover>
        </div>
    );
};

export default OurShop;