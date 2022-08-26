const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/stripe-payment", cors(), async (req, res) => {
    let { amount, id, receipt_email } = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Successful payment at Dane.com",
            payment_method: id,
            confirm: true,
            receipt_email,
        });
        console.log("Payment", payment);
        res.json({
            message: "Payment successful",
            success: true,
        });
    } catch (error) {
        console.log("Error", error);
        res.json({
            message: "Error",
            success: false,
        });
    }
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Sever is up and running on port 4000");
});
