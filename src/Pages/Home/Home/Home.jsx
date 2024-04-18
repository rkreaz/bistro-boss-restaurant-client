import Banner from "../Banner/Banner";
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
        </div>
    );
};

export default Home;