import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaUsers } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { LiaCarSideSolid } from "react-icons/lia";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('admin-stats');
            return res.data;
        }
    })
    console.log(stats);
    return (
        <div>
            <h1 className="text-3xl mt-14 ml-6 font-medium">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>

            <div>
                <div className="grid grid-cols-4 shadow mt-9 gap-5 ml-6">

                    <div className="flex items-center gap-3 justify-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white rounded-2xl px-8 py-8">
                        <div className="">
                            <FaDollarSign className="w-12 h-12"></FaDollarSign>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">${stats.revenue}</h2>
                            <p className="text-xl font-normal">Revenue</p>
                        </div>

                    </div>

                    <div className="flex items-center gap-3 justify-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white rounded-2xl px-5 py-8">
                        <div className="">
                            <FaUsers className="w-12 h-12"></FaUsers>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">{stats.users}</h2>
                            <div className="text-xl font-normal">Customers</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 justify-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white rounded-2xl px-5 py-8">
                        <div className="">
                            <GrUserManager className="w-12 h-12"></GrUserManager>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">{stats.menuItems}</h2>
                            <div className="text-xl font-normal">Products</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 justify-center bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white rounded-2xl px-5 py-8">
                        <div className="">
                            <LiaCarSideSolid className="w-12 h-12"></LiaCarSideSolid>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">{stats.orders}</h2>
                            <div className="text-xl font-normal">Orders</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;