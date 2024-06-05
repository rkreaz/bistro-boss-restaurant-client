import { FaEdit } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    // const navigate = useNavigate()

    // const handleUpdateItem = (item) => {
    //     navigate(`/dashboard/updateItem/${item._id}`)
    // }

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (result.isConfirmed) {
                    const res = await axiosSecure.delete(`/menu/${item._id}`);
                    // console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        refetch()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${item.name} Has been Deleted `,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
            }
        });
    }

    return (
        <div>
            <h1 className="font-bold text-2xl text-[#FB6E09] mt-10 text-center">Manage <span className="text-[#097428]">{menu.length}</span> food items:</h1>
            <div>
                <div className='ml-16 mt-10'>
                    <div className="overflow-x-auto rounded-t-lg mt-5">
                        <table className="table w-full">
                            {/* head */}
                            <thead className='bg-[#FB6E09] text-[#fff] text-lg'>
                                <tr>
                                    <th>Number</th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menu.map((item, index) => <tr key={item._id}>
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

                                        <th>
                                            <Link to={`/dashboard/updateItem/${item._id}`}>
                                                <span className='flex justify-center items-center'>
                                                    <p className='bg-[#FB6E09] p-2 rounded-lg'>
                                                        <FaEdit className="text-2xl text-[#fff] cursor-pointer"></FaEdit>
                                                    </p>
                                                </span>
                                            </Link>
                                        </th>
                                        <th>
                                            <span className='flex justify-center items-center'>
                                                <p onClick={() => handleDeleteItem(item)} className='bg-[#B91C1C] p-2 rounded-lg'><RiDeleteBinLine className='text-2xl text-[#fff]'></RiDeleteBinLine></p>
                                            </span>
                                        </th>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;