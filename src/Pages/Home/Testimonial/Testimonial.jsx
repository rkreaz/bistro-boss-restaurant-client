import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-restaurant-server-steel.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='bg-[#fff]'>
            <div className='max-w-6xl mx-auto pb-20 pt-20'>
              
                <div className='bg-[#EFEFEF]'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}

                            >
                                <div className='px-10 mx-20 flex flex-col items-center text-center mb-14 mt-14 max-sm:mb-16'>
                                <p className='text-6xl max-sm:text-2xl text-[#151515] max-sm:mt-5 max-sm:mb-5'><FaQuoteLeft /></p>
                                    <div className='mt-5 max-sm:mt-5'>
                                        <Rating
                                            style={{ maxWidth: 150 }}
                                            value={review.rating}
                                            readOnly />

                                    </div>
                                    <p className='max-sm:text-sm mt-3 text-[#151515]'>{review.details}</p>
                                    <h2 className='text-3xl font-bold text-[#F66904] mt-4 max-sm:text-xl'>{review.name}</h2>
                                </div>


                            </SwiperSlide>
                            )
                        }
                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;