import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepLabel } from "@mui/material";
import DeliveryInfo from "../../Components/CheckoutComponents/deliveryInfo";
import ConfirmOrder from "../../Components/CheckoutComponents/confirmOrder";
import { useDispatch, useSelector } from "react-redux";
import { stepActions } from "../../Redux/Features/stepSlice";
import CardPayment from "../../Components/CheckoutComponents/cardPayment";
import { VscPass } from "react-icons/vsc";

const steps = ["Delivery Info", "Confirm the order", "Payment"];

const Checkout = () => {
    const activeStepp = useSelector((state) => state.stepping.activeStep);
    const dispatch = useDispatch();

    const totalSteps = () => {
        return steps.length;
    };

    const iscomplete = () => {
        return activeStepp === totalSteps();
    };
    const handleBack = () => {
        dispatch(stepActions.decreaseStep());
    };

    return (
        <Box sx={{ width: "100%", mt: 5 }}>
            <Stepper activeStep={activeStepp} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {iscomplete() ? (
                    <React.Fragment>
                        <Typography
                            sx={{
                                mt: 20,
                                mb: 20,
                                textAlign: "center",
                                fontSize: "1.5rem",
                            }}>
                            <div
                                style={{ textAlign: "center", color: "green" }}>
                                <VscPass size={50} />
                            </div>
                            Successful order. Soon you will be notified with
                            delivery update! Thanks for having trust in
                            Dane.com!
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}>
                            <Box sx={{ flex: "1 1 auto" }} />
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {activeStepp === 0 && <DeliveryInfo />}
                        {activeStepp === 1 && <ConfirmOrder />}
                        {activeStepp === 2 && <CardPayment />}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}>
                            <Button
                                color="inherit"
                                disabled={activeStepp === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}>
                                Back
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
};

export default Checkout;
