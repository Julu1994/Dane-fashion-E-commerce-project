const express = require("express");
const app = express();
const env = require("dotenv");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const bodyParser = require("body-parser");
const cors = require("cors");

env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/stripe-payment", cors(), async (req, res) => {
    let { amount, id, email } = req.body;
    try {
        const intentPayment = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: "USD",
            description: "Dane.com",
            payment_method: id,
            confirm: true,
            receipt_email: email,
        });
        console.log(intentPayment, "");
        res.json({
            message: "Payment successful",
            success: true,
        });
    } catch (error) {
        console.log("Error", error);
        res.json({
            message: "Payment failed",
            success: false,
        });
    }
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Sever is up and running on port 4000!!!");
});
