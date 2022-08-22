import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";

export default function CartButton() {
    return (
        <Box sx={{ "& > :not(style)": { marginBottom: 1 } }}>
            <Fab size="small" aria-label="add">
                <GrAdd />
            </Fab>
            <Fab size="small" aria-label="add">
                <AiOutlineMinus />
            </Fab>
        </Box>
    );
}
