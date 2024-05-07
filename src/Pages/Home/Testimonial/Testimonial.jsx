import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
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
        <div className='theme'>
            <div className='max-w-6xl mx-auto'>
                <SectionTitle
                    subHeading={'What Our Clients Say'}
                    Heading={'TESTIMONIALS'}
                ></SectionTitle>
                <div className='theme_text'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}

                            >
                                <div className='mx-20 flex flex-col items-center text-center mb-32 max-sm:mb-16'>
                                    <div className='mt-14 max-sm:mt-5'>
                                        <Rating
                                            style={{ maxWidth: 150 }}
                                            value={review.rating}
                                            readOnly />

                                    </div>
                                    <p className='text-6xl max-sm:text-2xl text-[#151515] mt-12 mb-12 max-sm:mt-5 max-sm:mb-5'><FaQuoteLeft /></p>


                                    <p className='max-sm:text-sm'>{review.details}</p>
                                    <h2 className='text-3xl font-bold text-[#D29B1C] mt-4 max-sm:text-xl'>{review.name}</h2>
                                </div>


                            </SwiperSlide>
                            )
                        }
                    </Swiper>

                </div>
            </div>
            <p className='border-t-2 pb-10'></p>
        </div>
    );
};

export default Testimonial;