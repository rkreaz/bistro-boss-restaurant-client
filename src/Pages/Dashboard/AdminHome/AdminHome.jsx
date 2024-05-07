import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaUsers } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { LiaCarSideSolid } from "react-icons/lia";
import PropTypes from "prop-types";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('admin-stats');
            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('order-stats');
            return res.data;
        }
    })

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // pie Char tData
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.totalRevenue }
    })


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
                            <h2 className="text-3xl font-bold">${stats.revenue}</h2>
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
            <div className="flex items-center justify-around">
                <div>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="totalQuantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                <div>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>

        </div>
    );
};

AdminHome.propTypes = {
    fill: PropTypes.object,
    x: PropTypes.object,
    y: PropTypes.object,
    width: PropTypes.object,
    height: PropTypes.object
};

export default AdminHome;