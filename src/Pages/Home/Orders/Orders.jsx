
import { Link } from 'react-router-dom';


const Orders = () => {
    return (
        <section className='pb-20 pt-20'>
            <div className='max-w-6xl mx-auto'>

                <h1 className="font-bold text-xl md:px-5 text-[#000000]">Categories Food</h1>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 max-sm:px-5 md:px-5'>


                    <Link to={'/shop/popular'}>
                        <div className="card">
                            <div className="border hover:border-[#F76600] all_category cursor-pointer hover:text-[#F76600] text-[#000000]">
                                <div className="hero-content flex-col lg:flex-row gap-6 justify-around">

                                    <div className=''>
                                        <h1 className="font-bold text-lg">Popular</h1>
                                        <p className="mt-1 text-[#000000] font-semibold">Items: <span className='font-bold text-[#F76600]'>15</span></p>
                                        <div className='mt-4 border px-2 py-1'>
                                            <p className="font-semibold">Order Now</p>
                                        </div>
                                    </div>
                                    <img className="h-24 w-24" src="https://i.ibb.co/HgVDdNF/salad-removebg-preview.png" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/shop/drinks'}>
                        <div className="card">
                            <div className="border hover:border-[#F76600] all_category cursor-pointer hover:text-[#F76600] text-[#000000]">
                                <div className="hero-content flex-col lg:flex-row gap-6 justify-around">

                                    <div className=''>
                                        <h1 className="font-bold text-lg">Drinks</h1>
                                        <p className="mt-1 text-[#000000] font-semibold">Items: <span className='font-bold text-[#F76600]'>20</span></p>
                                        <div className='mt-4 border px-2 py-1'>
                                            <p className="font-semibold">Order Now</p>
                                        </div>
                                    </div>
                                    <img className="h-24 w-24" src="https://i.ibb.co/4F4xvHL/drinks-1-removebg-preview.png" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/shop/soup'}>
                        <div className="card">
                            <div className="border hover:border-[#F76600] all_category cursor-pointer hover:text-[#F76600] text-[#000000]">
                                <div className="hero-content flex-col lg:flex-row gap-6 justify-around">

                                    <div className=''>
                                        <h1 className="font-bold text-lg">Soup</h1>
                                        <p className="mt-1 text-[#000000] font-semibold">Items: <span className='font-bold text-[#F76600]'>5</span></p>
                                        <div className='mt-4 border px-2 py-1'>
                                            <p className="font-semibold">Order Now</p>
                                        </div>
                                    </div>
                                    <img className="h-24 w-24" src="https://i.ibb.co/Kq0X8NZ/soup.png" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/shop/salad'}>
                        <div className="card">
                            <div className="border hover:border-[#F76600] all_category cursor-pointer hover:text-[#F76600] text-[#000000]">
                                <div className="hero-content flex-col lg:flex-row gap-6 justify-around">

                                    <div className=''>
                                        <h1 className="font-bold text-lg">Salad</h1>
                                        <p className="mt-1 text-[#000000] font-semibold">Items: <span className='font-bold text-[#F76600]'>10</span></p>
                                        <div className='mt-4 border px-2 py-1'>
                                            <p className="font-semibold">Order Now</p>
                                        </div>
                                    </div>
                                    <img className="h-24 w-24" src="https://i.ibb.co/8cV3XxK/Screenshot-65-removebg-preview.png" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/shop/pizza'}>
                        <div className="card">
                            <div className="border hover:border-[#F76600] all_category cursor-pointer hover:text-[#F76600] text-[#000000]">
                                <div className="hero-content flex-col lg:flex-row gap-6 justify-around">

                                    <div className=''>
                                        <h1 className="font-bold text-lg">Pizza</h1>
                                        <p className="mt-1 text-[#000000] font-semibold">Items: <span className='font-bold text-[#F76600]'>25</span></p>
                                        <div className='mt-4 border px-2 py-1'>
                                            <p className="font-semibold">Order Now</p>
                                        </div>
                                    </div>
                                    <img className="h-24 w-24" src="https://i.ibb.co/z5KgBzc/Screenshot-66-removebg-preview.png" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/shop/dessert'}>
                        <div className="card">
                            <div className="border hover:border-[#F76600] all_category cursor-pointer hover:text-[#F76600] text-[#000000]">
                                <div className="hero-content flex-col lg:flex-row gap-6 justify-around">

                                    <div className=''>
                                        <h1 className="font-bold text-lg">Dessert</h1>
                                        <p className="mt-1 text-[#000000] font-semibold">Items: <span className='font-bold text-[#F76600]'>15</span></p>
                                        <div className='mt-4 border px-2 py-1'>
                                            <p className="font-semibold">Order Now</p>
                                        </div>
                                    </div>
                                    <img className="h-24 w-24" src="https://i.ibb.co/2dwc2px/Dessert-removebg-preview.png" />
                                </div>
                            </div>
                        </div>
                    </Link>




                </div>
            </div>
        </section>
    );
};

export default Orders;