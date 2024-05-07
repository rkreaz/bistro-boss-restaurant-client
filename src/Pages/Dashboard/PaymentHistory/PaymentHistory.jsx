import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();

    const { data: payment = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.post(`/payments/${user.email}`)
            console.log('payments', res.data);
            return res.data;
        }
    })

    return (
        <div className="">
            <SectionTitle
                subHeading={'At a Glance!'} Heading={'PAYMENT HISTORY'}
            ></SectionTitle>

            <div className='flex ml-16  mt-14'>
                <h2 className='text-3xl font-bold'>Total Payments: {payment.length}</h2>
            </div>
            <div className='ml-8 mb-20'>
                <div className="overflow-x-auto rounded-t-lg mt-5">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-[#fff] text-lg'>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Category</th>
                                <th>Total Price</th>
                                <th>Payment Date</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payment.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>

                                    <td>{item.email} </td>

                                    <td>{item.transactionId}</td>

                                    <th>
                                        ${item.price}
                                    </th>
                                    <th>

                                        {item.date}

                                    </th>
                                    <th>
                                        {item.status}
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

export default PaymentHistory;