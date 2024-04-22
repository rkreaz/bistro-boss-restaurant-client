import React, { useEffect, useState } from 'react';
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
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                Heading={'TESTIMONIALS'}
            ></SectionTitle>
            <div className=''>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}

                        >


                            <div className='mx-20 flex flex-col items-center text-center mb-32'>
                                <div className='mt-14'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly />

                                </div>
                                <p className='text-6xl text-[#151515] mt-12 mb-12'><FaQuoteLeft /></p>


                                <p>{review.details}</p>
                                <h2 className='text-3xl font-bold text-[#D29B1C] mt-4'>{review.name}</h2>
                            </div>


                        </SwiperSlide>
                        )
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Testimonial;