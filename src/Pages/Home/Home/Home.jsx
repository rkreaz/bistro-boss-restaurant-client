import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Feedback from "../Feedback/Feedback";
import Orders from "../Orders/Orders";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Orders></Orders>
            <Feedback></Feedback>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Cards></Cards>
            <Featured></Featured>
        </div>
    );
};

export default Home;