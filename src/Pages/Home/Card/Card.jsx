import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Card = ({ card }) => {
    const { name, recipe, image, price, _id} = card;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleAddToCard = food => {
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
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} Added To Your Card`,
                        showConfirmButton: false,
                        timer: 1500
                      });
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
                   navigate('/login', {state:{from: location}})
                }
            });
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl border">
                <figure><img className='w-full h-60' src={image} alt="Shoes" /></figure>
                <p className='text-[#fff] bg-[#F90101] absolute right-0 px-4 py-1 rounded-lg mr-2 mt-2'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <button onClick={() => handleAddToCard(card)} className="btn btn-outline text-[#fff] text-base border-0 border-b-4">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;