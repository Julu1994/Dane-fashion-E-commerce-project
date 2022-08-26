import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./stripeForm.scss";

const card_styling = {
    iconStyle: "solid",
    style: {
        base: {
            color: "#32325d",
            fontFamily: "Arial, sans-serif",
            fontSmoothing: "antialiased",
            fontSize: "20px",
            "::placeholder": {
                color: "#32325d",
            },
        },
        invalid: {
            fontFamily: "Arial, sans-serif",
            color: "#fa755a",
            iconColor: "#DC143C",
        },
    },
};

const StripeForm = () => {
    const [loading, setLoading] = useState(false);
    const [processing, setProcessing] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const total = useSelector((state) => state.cartItem.totalAmount);
    const price = total * 100;
    const customerEmail = useSelector((state) => state.user.userInfo.email);

    const submitHandler = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                    "http://localhost:4000/stripe-payment",
                    {
                        amount: price,
                        id,
                        receipt_email: customerEmail,
                    }
                );

                if (response.data.success) {
                    console.log("Successful payment");
                    setLoading(true);
                    setProcessing(false);
                    toast.success("Successful payment");
                } else {
                    toast.error("Something went wrong, Please try again");
                    setProcessing(false);
                }
            } catch (error) {
                console.log("Error", error);
                toast.error("Something went wrong, Please try again");
                setProcessing(false);
            }
        } else {
            setProcessing(false);
            toast.error("Something went wrong, Please try again");
            console.log(error.message);
        }
    };

    return (
        <div className="form">
            {!loading ? (
                <form onSubmit={submitHandler}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={card_styling} />
                        </div>
                    </fieldset>
                    <button type="submit" className="payment-btn">
                        {processing ? "Pocessing..." : "Pay"}
                    </button>
                </form>
            ) : (
                <div>
                    <p>
                        Payment is successful! Thanks for your order. You will
                        get your receipt on your email soon.
                    </p>
                </div>
            )}
        </div>
    );
};
export default StripeForm;
