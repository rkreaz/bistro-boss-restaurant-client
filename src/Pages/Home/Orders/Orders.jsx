import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Orders = () => {
    return (
        <section className='theme'>
            <div className='max-w-6xl mx-auto'>
                <SectionTitle
                    subHeading='From 11:00am to 10:00pm'
                    Heading='ORDER ONLINE'
                ></SectionTitle>

                <div className='pt-16 pb-14'>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <div className=''>
                            <SwiperSlide className='max-sm:text-center'>
                                <img className='max-sm:w-full p-5 max-sm:h-96' src={image1} alt="" />
                                <h1 className='text-center text-xl text-[#fff] -mt-20  uppercase'>Salads</h1>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='max-sm:w-full p-5 max-sm:h-96' src={image2} alt="" />
                                <h1 className='text-center text-xl text-[#fff] -mt-20 uppercase'>Soups</h1>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='max-sm:w-full p-5 max-sm:h-96' src={image3} alt="" />
                                <h1 className='text-center text-xl text-[#fff] -mt-20 uppercase'>pizzas</h1>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='max-sm:w-full p-5 max-sm:h-96' src={image4} alt="" />
                                <h1 className='text-center text-xl text-[#fff] -mt-20 uppercase'>desserts</h1>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='max-sm:w-full p-5 max-sm:h-96' src={image5} alt="" />
                                <h1 className='text-center text-xl text-[#fff] -mt-20 uppercase'>Salads</h1>
                            </SwiperSlide>
                        </div>

                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default Orders;