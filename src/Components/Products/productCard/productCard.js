import "./productCard.scss";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "../rating";

const ProductCard = (props) => {
    const { productName, productImg, price } = props;
    return (
        <div className="card">
            <Card sx={{ maxWidth: 235, borderRadius: " 1.5rem" }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={productImg}
                    alt="green iguana"
                />
                <CardContent sx={{ maxHeight: ".5rem" }}>
                    <Typography sx={{ maxHeight: ".2rem" }} variant="p">
                        {productName}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        sx={{ marginBottom: ".5rem" }}>
                        {price}$
                    </Button>
                    <Rating />
                </CardActions>
            </Card>
        </div>
    );
};

export default ProductCard;
