import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Success from "./Steps/success";
import FirstStep from "./Steps/firstStep";
import { Button } from "@mui/material";

const steps = ["Delivery Information", "Delivery Method", "Payment"];

const Checkout = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const totalSteps = () => {
        return steps.length;
    };
    const completedSteps = () => {
        return Object.keys(completed).length;
    };
    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };
    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };
    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <div>
            <Box sx={{ width: "100%" }}>
                <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {allStepsCompleted() ? (
                    <Success />
                ) : (
                    <>
                        <FirstStep />
                    </>
                )}
            </Box>
            <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
            </Button>
            <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}>
                Back
            </Button>
        </div>
    );
};

export default Checkout;
