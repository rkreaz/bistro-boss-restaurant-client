
const Footer = () => {
    return (
        <>
            <div className=" bg-[#fff] font-poppins">

                <div className="">
                    <footer className="max-sm:justify-center max-w-6xl mx-auto footer px-12 pt-20 py-8 text-[#000]">

                        <nav>
                            <h2 className='font-extrabold text-xl mb-5 hover:text-[#FF720D]'>Quick Links</h2>
                            <a className="link link-hover hover:text-[#FF720D]">Home</a>
                            <a className="link link-hover hover:text-[#FF720D]">About Us</a>
                            <a className="link link-hover hover:text-[#FF720D]">Services</a>
                            <a className="link link-hover hover:text-[#FF720D]">Contact Us</a>
                        </nav>
                        <nav>
                            <h2 className='font-extrabold text-xl mb-5 hover:text-[#FF720D]'>Our Services</h2>
                            <a className="link link-hover hover:text-[#FF720D]">Smartphone Repair</a>
                            <a className="link link-hover hover:text-[#FF720D]">Laptop Repair</a>
                            <a className="link link-hover hover:text-[#FF720D]">Desktop Repair</a>
                            <a className="link link-hover hover:text-[#FF720D]">Smart Watch Repair</a>
                        </nav>
                        <nav>
                            <h2 className='font-extrabold text-xl mb-5 hover:text-[#FF720D]'>Contact Us</h2>
                            <a className="link link-hover hover:text-[#FF720D]">
                                32 Main Street, Miami, <br />
                                Florida 19091, FL</a>
                            <a className="link link-hover hover:text-[#FF720D]">
                                666 888 0000 <br />
                                444 888 0000</a>
                            <a className="link link-hover hover:text-[#FF720D]">
                                needhelp@company.com <br />
                                company@gmail.com</a>
                        </nav>
                        <nav>
                            <h2 className='font-extrabold text-xl mb-5 hover:text-[#FF720D]'>Download App On Mobile</h2>
                            <a className="link link-hover hover:text-[#FF720D]">30% discount on your first order</a>
                            <div className="flex gap-5 mt-2">
                                <a href="https://www.apple.com/store" target="_blank"><img src="https://i.ibb.co/nz2v9md/apple.png" alt="" /></a>
                                <a href="https://play.google.com/store/" target="_blank"><img src="https://i.ibb.co/7SPBYR6/google.png" alt="" /></a>
                            </div>
                            <a className="link text-base font-semibold link-hover hover:text-[#FF720D] mt-2">
                            We Accept Payment Via</a>
                            <a href=""><img src="https://i.ibb.co/N3HLkjs/card.png" alt="" /></a>
                        </nav>
                    </footer>
                </div>
                <div className="border-t-2"></div>

                <footer className="footer max-w-6xl mx-auto items-center justify-around px-12 py-10 pb-20 text-neutral-content">
                    <aside className="items-center grid-flow-col">
                        <p className='hover:text-[#FF720D] text-[#FF6B01] text-xl'>Copyright © 2023 - By Rezaul Karim Reaz</p>
                    </aside>

                </footer>
            </div>

        </>

    );
};

export default Footer;