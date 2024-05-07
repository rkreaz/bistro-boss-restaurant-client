import ItemMenu from '../Shard/ItemMenu/ItemMenu';
import Cover from '../Shard/Cover/Cover';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const MenuCategory = ({ items, title, img, button }) => {
    return (
        <div>
            {title && <Cover img={img} title={title} pra={'Would You Like To Try A Dish?'}></Cover>}
            <div className='grid lg:grid-cols-2 gap-8 mt-20 mb-10 max-sm:mt-10 max-sm:p-5'>
                {items.map(item => <ItemMenu
                    key={item._id}
                    item={item}
                ></ItemMenu>)}
            </div>
            <Link to={`/shop/${title}`}>
                <div className='text-center pb-24'>
                    <button className="btn btn-outline text-[#fff] theme_text bg-[#9C0C0C] text-base border-0 border-b-4 uppercase max-sm:text-xs">{button}</button>
                </div>
            </Link>
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.object,
    title: PropTypes.object,
    img: PropTypes.object,
    button: PropTypes.object
};

export default MenuCategory;