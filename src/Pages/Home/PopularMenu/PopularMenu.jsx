import ItemMenu from '../../Shard/ItemMenu/ItemMenu';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularMenu = data.filter(item => item.category === 'popular');
    //             setMenu(popularMenu);
    //         })
    // }, [])


    return (
        <section className='bg-[#fff] pt-20'>
            <div className='max-w-6xl mx-auto'>
            <h1 className="font-bold text-xl md:px-5 text-[#000000]">Popular Food</h1>
                <div className='grid lg:grid-cols-2 sm:grid-cols-2  gap-5 mt-5 mb-8 px-5'>
                    {popular.slice(0, 6).map(item => <ItemMenu
                        key={item._id}
                        item={item}
                    ></ItemMenu>)}
                </div>
                <div className='text-center pb-16 max-sm:pb-5'>
                  <Link to={'/shop/popular'}>
                  <button className="btn btn-slide-left rounded-none text-[#fff] bg-[#FFB23F] text-base border-0">View Full  Menu</button>
                  </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularMenu;