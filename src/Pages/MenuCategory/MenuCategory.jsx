import ItemMenu from '../Shard/ItemMenu/ItemMenu';
import Cover from '../Shard/Cover/Cover';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { FaArrowRight} from 'react-icons/fa';

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
                    <button className="btn btn-slide-left rounded-none text-[#fff] bg-[#FFB23F] text-base border-0"> {button} <FaArrowRight></FaArrowRight></button>
                </div>
            </Link>
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string,
    img: PropTypes.string,
    button: PropTypes.string
};

export default MenuCategory;