import React, { useState } from 'react';
import Cover from '../Shard/Cover/Cover';
import ourShopImg from '../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import Card from '../Home/Card/Card';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();


    const drinks = menu.filter(item => item.category === 'drinks');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>

            <Cover img={ourShopImg} title={'OUR SHOP'} pra={'WOULD YOU LIKE TO TRY A DISH?'}></Cover>

            <div className='mt-20 mb-16 text-center'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='mt-10 grid grid-cols-3 gap-12'>
                            {
                                salad.map(card => <Card key={card._id} card={card}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='mt-10 grid grid-cols-3 gap-12'>
                            {
                                pizza.map(card => <Card key={card._id} card={card}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='mt-10 grid grid-cols-3 gap-12'>
                            {
                                soup.map(card => <Card key={card._id} card={card}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='mt-10 grid grid-cols-3 gap-12'>
                            {
                                desserts.map(card => <Card key={card._id} card={card}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='mt-10 grid grid-cols-3 gap-12'>
                            {
                                drinks.map(card => <Card key={card._id} card={card}></Card>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;