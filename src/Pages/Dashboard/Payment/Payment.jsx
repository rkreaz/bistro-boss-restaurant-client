import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm ';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>
           <h1 className="font-bold text-2xl text-[#FB6E09] mt-10 text-center">Payment Items</h1>
            <div className='mt-10 px-20'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>

            </div>
        </div>
    );
};

export default Payment;