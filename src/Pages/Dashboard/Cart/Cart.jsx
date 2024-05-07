import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCard from '../../../hooks/useCard';
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [card, refetch] = useCard();
    const totalPrice = card.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cards/${id}`,)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <SectionTitle
                subHeading={'My Cart'}
                Heading={'WANNA ADD MORE?'}
            ></SectionTitle>

            <div className='flex justify-evenly  mt-14'>
                <h2 className=' text-3xl font-bold'>Total orders: {card.length}</h2>
                <h2 className=' text-3xl font-bold'>total price: ${totalPrice}</h2>

                {card.length ? <Link to={'/dashboard/reservation'}>
                    <button className='bg-[#D1A054] text-[#fff] text-xl font-semibold p-3 rounded-lg'>Pay</button>
                </Link>
                :
                <button disabled className='bg-[#271e12] text-[#998f81] text-xl font-semibold p-3 rounded-lg'>Pay</button>
                }


            </div>
            <div className='ml-16 mb-20'>
                <div className="overflow-x-auto rounded-t-lg mt-5">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-[#fff] text-lg'>
                            <tr>
                                <th>Number</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                card.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>{item.name} </td>
                                    <td>${item.price}</td>
                                    <th className='flex justify-center items-center'>
                                        <p onClick={() => handleDelete(item._id)} className='bg-[#B91C1C] p-2 rounded-lg'>  <RiDeleteBinLine className='text-2xl text-[#fff]'></RiDeleteBinLine></p>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;