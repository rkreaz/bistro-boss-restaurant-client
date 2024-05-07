import PropTypes from "prop-types";
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, pra }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[500px] max-sm:h-[250px]">
                <div className="hero-content text-center text-neutral-content">
                    <div className=" opacity-60 bg-[#000101] px-48 max-sm:px-20 py-14">
                        <h1 className="mb-5 text-5xl text-[#fff] max-sm:text-xl max-sm:mb-2">{title}</h1>
                        <p className="mb-5 uppercase text-[#fff] max-sm:text-xs">{pra}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

Cover.propTypes = {
    img: PropTypes.object,
    title: PropTypes.object,
    pra: PropTypes.object
};

export default Cover;