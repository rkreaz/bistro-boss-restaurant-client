import PropTypes from "prop-types";
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCard from '../../../hooks/useCard';
import { FaShoppingCart } from "react-icons/fa";

const Card = ({ card }) => {
    const { name, recipe, image, price, _id } = card;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, reFetch] = useCard();

    const handleAddToCard = () => {
        if (user && user.email) {
            //Send Card Items To Database.
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/cards', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Added To Your Card`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        reFetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login To Add To The Card?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Send Card Items To Login Page.
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className=" ">
            <div className="card rounded-none hover:border-[#FF720D] border max-sm:mt-8">
                <figure><img className='w-full h-60 p-9' src={image} alt="Shoes" /></figure>
                <p className='text-[#000] bg-[#FF720D] absolute right-0 px-2 py-0 rounded-lg mr-2 mt-2'>${price}</p>
                <div className="card-body h-64">
                    <h2 className="card-title max-sm:text-lg text-[#000]">{name}</h2>
                    <p className="max-sm:text-sm text-[#000]">{recipe}</p>
                    <button onClick={handleAddToCard} className="btn btn-slide-left rounded-none text-[#fff] bg-[#FF720D] text-base border-0"><FaShoppingCart></FaShoppingCart> add to cart</button>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object,
};

export default Card;