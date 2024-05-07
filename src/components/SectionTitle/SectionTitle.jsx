import PropTypes from "prop-types";

const SectionTitle = ({ subHeading, Heading }) => {
    return (
        <div>
            <div className="text-center w-1/2 mx-auto pt-20 max-sm:pt-10 theme_text">
                <p className="text-[#D99904] mb-2 lg:text-xl max-sm:text-xs font-medium">--- {subHeading} ---</p>
                <h1 className="text-3xl max-sm:text-sm border-y-2 py-3 font-semibold">{Heading}</h1>
            </div>
        </div>
    );
};

SectionTitle.propTypes = {
    subHeading: PropTypes.string,
    Heading: PropTypes.string
};

export default SectionTitle;