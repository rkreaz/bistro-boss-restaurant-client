import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDeleteUser = (user) => {
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
                axiosSecure.delete(`/users/${user._id}`,)
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

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} Is An Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div>
            <div>
                <SectionTitle
                    subHeading={'How many??'}
                    Heading={'MANAGE ALL USERS'}
                ></SectionTitle>

                <div className='flex ml-16  mt-14'>
                    <h2 className='text-[#fff] text-3xl font-bold'>Total Users: {users.length}</h2>
                </div>
                <div className='ml-16 mb-20'>
                    <div className="overflow-x-auto rounded-t-lg mt-5">
                        <table className="table w-full">
                            {/* head */}
                            <thead className='bg-[#D1A054] text-[#fff] text-lg'>
                                <tr>
                                    <th>Number</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((item, index) => <tr key={item._id}>
                                        <th>
                                            {index + 1}
                                        </th>

                                        <td>{item.name} </td>

                                        <td>{item.email}</td>

                                        <th>
                                            { item.role ==='admin' ? 'Admin' : <span className='flex justify-center items-center'>
                                                <p onClick={() => handleMakeAdmin(item)} className='bg-[#D1A054] p-2 rounded-lg'>
                                                    <FaUsers className="text-2xl text-[#fff]"></FaUsers>
                                                </p>
                                            </span>}
                                        </th>
                                        <th>
                                            <span className='flex justify-center items-center'>
                                                <p onClick={() => handleDeleteUser(item)} className='bg-[#B91C1C] p-2 rounded-lg'><RiDeleteBinLine className='text-2xl text-[#fff]'></RiDeleteBinLine></p>
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

export default AllUsers;