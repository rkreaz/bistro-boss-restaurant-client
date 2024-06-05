import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Feedback from "../Feedback/Feedback";
import Orders from "../Orders/Orders";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {

    return (

        <>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Orders></Orders>
            <Feedback></Feedback>
            <PopularMenu></PopularMenu>
            <Cards></Cards>
            <Featured></Featured>
            <Testimonial></Testimonial>
            <Contact></Contact>

        </>
    );
};

export default Home;