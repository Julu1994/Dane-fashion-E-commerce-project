import "./support.scss";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Fab } from "@mui/material";
import { MdNavigation } from "react-icons/md";
import { toast } from "react-toastify";

function Support() {
    const [value, setValue] = React.useState(true);
    const submitHandler = (e) => {
        toast.success("The message has been sent successfully");
        setValue("");
    };
    return (
        <div className="support">
            {value ? (
                <div className="support-text">
                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": { m: 1, width: "25ch" },
                        }}
                        noValidate
                        autoComplete="off">
                        <TextField
                            id="outlined-basic"
                            label="Your Name"
                            variant="outlined"
                        />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": {
                                m: 1,
                                width: "25ch",
                            },
                        }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Your Message"
                            multiline
                            rows={4}
                            defaultValue="Write here"
                        />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": { m: 1, width: "25ch" },
                        }}>
                        <Fab
                            sx={{ ml: "5rem", mb: "2rem" }}
                            variant="extended"
                            size="small"
                            color="primary"
                            aria-label="add"
                            onClick={submitHandler}>
                            <MdNavigation />
                            Send
                        </Fab>
                    </Box>
                </div>
            ) : (
                <div className="support-success">
                    <Alert severity="success">
                        Message sent! We will get back to you as soon as we
                        can!!
                    </Alert>
                </div>
            )}
        </div>
    );
}

export default Support;
