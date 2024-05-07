
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Contact = () => {
    return (
        <div className='theme'>
            <div className='max-w-6xl mx-auto'>
                <SectionTitle subHeading={'This Contact'} Heading={'Contact Us'}
                ></SectionTitle>
                <div className="hero bg-[#9C0C0C] mt-28 pb-28 max-sm:mt-10 max-sm:pb-10">
                    <div className="hero-content text-center p-20 max-sm:p-5">
                        <h1 className="text-5xl max-sm:text-xl font-bold text-[#fff] mt-10">Call Us: +88 0192345678910</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;