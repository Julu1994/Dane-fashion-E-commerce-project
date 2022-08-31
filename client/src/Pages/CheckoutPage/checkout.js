import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepLabel } from "@mui/material";
import DeliveryInfo from "../../Components/CheckoutComponents/deliveryInfo";
import ConfirmOrder from "../../Components/CheckoutComponents/confirmOrder";
import CardPayment from "../Payment/cardPayment";

const steps = ["Delivery Info", "Confirm the order", "Payment"];

const Checkout = () => {
    const [activeStepp, setActiveStepp] = React.useState(0);

    const totalSteps = () => {
        return steps.length;
    };

    // const isLastStep = () => {
    //     return activeStepp === totalSteps() - 1;
    // };
    const iscomplete = () => {
        return activeStepp === totalSteps();
    };

    const handleNext = () => {
        setActiveStepp((step) => step + 1);
    };

    const handleBack = () => {
        setActiveStepp((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStepp(0);
    };

    return (
        <Box sx={{ width: "100%" }}>
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
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}>
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {activeStepp === 0 && (
                            <DeliveryInfo props={handleNext} />
                        )}
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
                            <Button onClick={handleNext}>next</Button>
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
};

export default Checkout;
