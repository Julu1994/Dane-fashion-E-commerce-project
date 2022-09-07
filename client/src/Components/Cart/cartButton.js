import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Redux/Features/cartSlice";

export default function CartButton({ itemID }) {
    const alItems = useSelector((state) => state.products.item);
    const item = alItems.filter((i) => i.id === itemID);
    const dispatch = useDispatch();
    const increaseItem = () => {
        dispatch(cartActions.addTocart(item[0]));
    };
    const decreaseItem = () => {
        dispatch(cartActions.removeFromCart(itemID));
    };
    return (
        <Box sx={{ "& > :not(style)": { marginBottom: 1 } }}>
            <Fab size="small" aria-label="add" onClick={increaseItem}>
                <GrAdd />
            </Fab>
            <Fab size="small" aria-label="add" onClick={decreaseItem}>
                <AiOutlineMinus />
            </Fab>
        </Box>
    );
}
