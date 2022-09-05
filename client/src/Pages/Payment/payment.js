// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import React from "react";
// import StripeForm from "./stripeForm";
// import visa from "../../Resources/vi.png";
// import master from "../../Resources/mc.png";
// import "./payment.scss";
// import { useSelector } from "react-redux";
// const env = process.env.REACT_APP_STRIPE_SECRET_KEY;

// const promise = loadStripe(env);

// const Payment = () => {
//     const totalAmount = useSelector((state) => state.cartItem.totalAmount);
//     return (
//         <div className="payment">
//             <p className="price">Oreder in total: {totalAmount}.00$</p>
//             <Elements stripe={promise}>
//                 <StripeForm />
//             </Elements>
//             <div>
//                 <img src={visa} alt="visa" className="vc" />
//                 <img src={master} alt="master" className="mc" />
//             </div>
//         </div>
//     );
// };
// export default Payment;
