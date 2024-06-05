
import FeaturedImg from '../../../assets/home/featured.jpg'

import './Featured.css'


const Featured = () => {
    return (
        <div className=''>
            <div className='Featured_Image bg-fixed'>
                <div className='bg-[#161414] bg-opacity-70'>
                    <div className='max-w-6xl mx-auto'>
                        <div className='text-[#fff]'>
                          
                            <div className='flex items-center pt-20 max-sm:mt-10 pb-20 max-sm:pb-10 gap-14 max-sm:flex-col max-sm:p-5'>
                                <div className=''>
                                    <img className='' src={FeaturedImg} alt="" />
                                </div>
                                <div className='space-y-2'>
                                    <h4 className='max-sm:text-lg'>March 20, 2023</h4>
                                    <h2 className='text-2xl font-semibold text-[#FF720D]'>WHERE CAN I GET SOME?</h2>
                                    <p className='max-sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                    <button className="btn btn-slide-left rounded-none text-[#fff] bg-[#FFB23F] text-base border-0">Read More</button>
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

