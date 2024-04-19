import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Cards = () => {
    return (
        <div>
            <SectionTitle
                subHeading={'Should Try'}
                Heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className='mt-10 grid grid-cols-3 gap-8 mb-32 text-[#fff]'>
                <div className="card w-96 bg-base-100 shadow-2xl border">
                    <figure><img className='w-full h-60' src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/9/1/0/FNK_Vegetarian-Spinach-Walnut-Pate_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1409776051289.jpeg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn btn-outline text-[#fff] text-base border-0 border-b-4">add to cart</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-2xl border">
                    <figure><img className='w-full h-60' src="https://www.realsimple.com/thmb/eR17CQQYSZWKCQ2uAr83IuKIqAk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mixed-grains-bowl-beet-ginger-dressing-recipe-0221foo-38c08b070c384c3d850bcdad825220af.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn btn-outline text-[#fff] text-base border-0 border-b-4">add to cart</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-2xl border">
                    <figure><img className='w-full h-60' src="https://images.immediate.co.uk/production/volatile/sites/30/2021/07/Buddha-bowl-salad-eade933.jpg?resize=900%2C471" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn btn-outline text-[#fff] text-base border-0 border-b-4">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;