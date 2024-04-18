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
        <section>
            <SectionTitle
                subHeading='From 11:00am to 10:00pm'
                Heading='ORDER ONLINE'
            ></SectionTitle>

            <div className='mt-16 mb-14'>
                <Swiper
                    slidesPerView={1}
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
                    <SwiperSlide>
                        <img src={image1} alt="" />
                        <h1 className='text-center text-xl text-[#fff] -mt-16 uppercase'>Salads</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt="" />
                        <h1 className='text-center text-xl text-[#fff] -mt-16 uppercase'>Soups</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image3} alt="" />
                        <h1 className='text-center text-xl text-[#fff] -mt-16 uppercase'>pizzas</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image4} alt="" />
                        <h1 className='text-center text-xl text-[#fff] -mt-16 uppercase'>desserts</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image5} alt="" />
                        <h1 className='text-center text-xl text-[#fff] -mt-16 uppercase'>Salads</h1>
                    </SwiperSlide>

                </Swiper>

            </div>
        </section>
    );
};

export default Orders;