import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const ProductRating = () => {
    const [value, setValue] = React.useState(4);

    return (
        <Box
            sx={{
                "& > legend": { mt: 1 },
                marginBottom: ".2rem",
                marginLeft: ".2rem",
            }}>
            <Rating
                size="small"
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>
    );
};
export default ProductRating;
