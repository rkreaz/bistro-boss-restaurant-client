import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="theme">
                <div className="max-w-6xl mx-auto">
                    <footer className="grid grid-cols-2 theme_text">
                        <aside className=" p-14 max-sm:p-5 text-center">
                            <h1 className="text-2xl font-bold max-sm:text-sm">CONTACT US</h1>
                            <div className="space-y-1 font-medium max-sm:text-xs">
                                <p className="mt-5">123 ABS Street, Uni 21, Bangladesh </p>
                                <p> +88 123456789 </p>
                                <p>Mon - Fri: 08:00 - 22:00</p>
                                <p> Sat - Sun: 10:00 - 23:00</p>
                            </div>
                        </aside>
                        <nav className=" p-14 max-sm:p-5 text-center">
                            <h6 className="text-2xl font-bold max-sm:text-sm">Follow US</h6>
                            <p className="mt-3 font-medium max-sm:text-sm">Join us on social media</p>
                            <div className="flex gap-5 mt-5 justify-center">
                                <FaFacebook className="text-2xl max-sm:text-lg text-[#0866FF]"></FaFacebook>
                                <FaYoutube className="text-2xl max-sm:text-lg text-[#FF0000]"></FaYoutube>
                                <FaTwitter className="text-2xl max-sm:text-lg text-[#1DA1F2]"></FaTwitter>
                               
                            </div>
                        </nav>

                    </footer>
                    <footer className="footer footer-center  theme_text pb-10">
                        <aside>
                            <p className="text-lg font-medium max-sm:text-sm max-sm:mt-5">Copyright © 2024 - All right reserved by Rzaul Karim Reaz</p>
                        </aside>
                    </footer>
                </div>
            </div>

        </>

    );
};

export default Footer;