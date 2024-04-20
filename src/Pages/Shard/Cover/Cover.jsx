import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, pra }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[500px]">
                <div className="hero-content text-center text-neutral-content">
                    <div className=" opacity-60 bg-[#000101] px-48 py-14">
                        <h1 className="mb-5 text-5xl text-[#fff]">{title}</h1>
                        <p className="mb-5 uppercase text-[#fff]">{pra}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;