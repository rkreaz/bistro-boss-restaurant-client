
// import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className='bg-[#FE710C]'>
            <div className='max-w-6xl mx-auto' >
                <footer className="footer p-10 text-[#fff]">
                    <nav className="">
                        <Link className="mt-5" to={'/'}>
                            <img className="w-full h-12" src="https://i.ibb.co/68H1Xmt/Screenshot-67-removebg-preview.png" alt="" />
                        </Link>
                    </nav>
                    <nav>
                        <a className="link link-hover">30% Discount For Your First Order</a>
                        <h6 className="link link-hover font-semibold text-base">Subscribe To Our Newsletter</h6>
                        <a className="link link-hover">Subscribe to the newsletter for all the latest updates</a>
                    </nav>

                    <form>

                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="">Enter your email address</span>
                            </label>
                            <div className="join border rounded-none">
                                <input type="text" placeholder="Enter email" className="input input-bordered join-item bg-[#fff] border-0 text-[#000]" />
                                <button className="btn btn-slide-left rounded-none text-[#fff] bg-[#FFB23F] text-base border-0 px-5">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
            </div>
        </div>
    );
};

export default Contact;