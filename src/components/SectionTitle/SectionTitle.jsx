
const SectionTitle = ({subHeading, Heading}) => {
    return (
        <div className="text-center w-1/4 mx-auto mt-20">
            <p className="text-[#D99904] mb-2">--- {subHeading} ---</p>
            <h1 className="text-[#ffff] text-3xl border-y-2 py-3">{Heading}</h1>
        </div>
    );
};

export default SectionTitle;