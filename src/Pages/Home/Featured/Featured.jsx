import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FeaturedImg from '../../../assets/home/featured.jpg'

import './Featured.css'


const Featured = () => {
    return (
        <div className='Featured_Image bg-fixed'>
            <div className='pt-5 pb-32 text-[#fff] bg-[#161414] bg-opacity-70'>
                <SectionTitle
                    subHeading={'Check it out'}
                    Heading={'FROM OUR MENU'}
                ></SectionTitle>
                <div className='flex items-center gap-10 justify-center mt-12 px-24'>
                    <div className=''>
                        <img className='' src={FeaturedImg} alt="" />
                    </div>
                    <div>
                        <h4>March 20, 2023</h4>
                        <h2>WHERE CAN I GET SOME?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline text-[#fff] text-base border-0 border-b-4 mt-5">Read More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;

