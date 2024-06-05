import { useQuery } from "@tanstack/react-query";
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
            <h1 className="font-bold text-2xl text-[#FB6E09] mt-10 text-center">Total Payments: <span>{payment.length}</span></h1>
            
            <div className='ml-8 mb-20 mt-10'>
                <div className="overflow-x-auto rounded-t-lg mt-5">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='bg-[#FB6E09] text-[#fff] text-lg'>
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
                                    <th className="text-[#3B68C9]">
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