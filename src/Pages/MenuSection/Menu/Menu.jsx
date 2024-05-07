
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shard/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../../MenuCategory/MenuCategory';
import menuIng from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div className='theme'>
            <div className='max-w-6xl mx-auto '>
                <Helmet>
                    <title>Bistro Boss | Menu</title>
                </Helmet>
                <Cover img={menuIng} title={"OUR MENU"} pra={'Would You Like To Try A Dish?'}></Cover>

                {/* main cover */}
                <SectionTitle subHeading={"Don't miss"} Heading={"TODAY'S OFFER"}></SectionTitle>

                {/* offered menu items */}
                <MenuCategory items={offered} button={'ORDER YOUR FAVOURITE Offered FOOD'}></MenuCategory>

                {/* dessert menu items */}
                <MenuCategory items={desserts} title={'dessert'} img={dessertImg} button={'ORDER YOUR FAVOURITE Desserts FOOD'}></MenuCategory>

                {/* pizza menu items */}
                <MenuCategory items={pizza} title={'pizza'} img={pizzaImg} button={'ORDER YOUR FAVOURITE Pizza FOOD'}></MenuCategory>

                {/* salad menu items */}
                <MenuCategory items={salad} title={'salad'} img={saladImg} button={'ORDER YOUR FAVOURITE Salad FOOD'}></MenuCategory>

                {/* soup menu items */}
                <MenuCategory items={soup} title={'soup'} img={soupImg} button={'ORDER YOUR FAVOURITE SOUP FOOD'}></MenuCategory>
            </div>
            <p className='border-t-2 pb-10'></p>
        </div>
    );
};

export default Menu;