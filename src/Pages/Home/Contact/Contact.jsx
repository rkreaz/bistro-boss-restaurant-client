import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Contact = () => {
    return (
        <div>
            <SectionTitle subHeading={'This Contact'} Heading={'Contact Us'}
            ></SectionTitle>
            <div className="hero bg-[#000] mt-28 mb-28">
                <div className="hero-content text-center p-20">
                        <h1 className="text-5xl font-bold text-[#fff]">Call Us: +88 0192345678910</h1>
                </div>
            </div>
        </div>
    );
};

export default Contact;