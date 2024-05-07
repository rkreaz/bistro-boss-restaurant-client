import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FeaturedImg from '../../../assets/home/featured.jpg'

import './Featured.css'


const Featured = () => {
    return (
        <div className='theme'>
            <div className='Featured_Image bg-fixed'>
                <div className='bg-[#161414] bg-opacity-70'>
                    <div className='max-w-6xl mx-auto'>
                        <div className='text-[#fff]'>
                            <SectionTitle
                                subHeading={'Check it out'}
                                Heading={'FROM OUR MENU'}
                            ></SectionTitle>
                            <div className='flex items-center mt-20 max-sm:mt-10 pb-20 max-sm:pb-10 gap-14 max-sm:flex-col max-sm:p-5'>
                                <div className=''>
                                    <img className='' src={FeaturedImg} alt="" />
                                </div>
                                <div className='space-y-2'>
                                    <h4 className='max-sm:text-lg'>March 20, 2023</h4>
                                    <h2 className='max-sm:text-xl'>WHERE CAN I GET SOME?</h2>
                                    <p className='max-sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                    <button className="btn btn-outline text-[#fff] bg-[#9C0C0C] text-base border-0 border-b-4 mt-5">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;

