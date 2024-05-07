import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCard from "../../../hooks/useCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [card, refetch] = useCard();
    const cardList = card;
    const totalPrice = card.reduce((total, item) => total + item.price, 0);
    const { user } = useAuth();



    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-checkout-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error);
            setError(error.message)
        }
        else {
            // console.log('PaymentMethod', paymentMethod);
            setError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous',
                },
            },
        });
        if (confirmError) {
            console.log("confirm error", confirmError);
        } else {
            // console.log("payment Intent", paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                // console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                //   console.log("card", cardList); return
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cardIds: cardList.map(item => item._id),
                    menuItemIds: cardList.map(item => item.menuId),
                    status: 'pending'
                }
                // console.log('adshfuadshfdu', payment);
                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res);
                refetch()
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank Your Paid Money",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        }

    }
    return (
        <div className=" px-5 pt-16 rounded-lg">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#008140',
                                '::placeholder': {
                                    color: '#000',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="text-center">
                    <button className="btn bg-[#570DF8] mt-20 w-1/2 text-xl text-[#fff]" type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>
                <div className="text-center mt-5">
                    <p className="text-xl text-red-800">{error}</p>
                    {
                        transactionId && <p className="text-xl text-green-800">{transactionId}</p>
                    }
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;