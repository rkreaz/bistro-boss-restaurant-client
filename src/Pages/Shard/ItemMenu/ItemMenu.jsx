import PropTypes from "prop-types";

const ItemMenu = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className='flex gap-5 justify-center items-center border hover:border-[#FF720D] p-5'>
            <img style={{ borderRadius: '0 200px 200px' }} className='w-[100px] h-[90px] max-sm:w-[70px] max-sm:h-[65px]' src={image} alt="" />
            <div>
                <h2 className="text-2xl text-[#FF720D] max-sm:text-lg">{name}----------</h2>
                <p className="text-base max-sm:text-sm mt-3">{recipe}</p>
            </div>
            <p className='text-[#FB6E08]'>${price}</p>
        </div>
    );
};
ItemMenu.propTypes = {
    item: PropTypes.object
};
export default ItemMenu;