import "./productCard.scss";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductCard = (props) => {
    const { productName, productImg, price } = props;
    return (
        <div className="card">
            <Card
                sx={{ maxWidth: 215, borderRadius: " 1.5rem", maxHeight: 380 }}>
                <CardMedia
                    component="img"
                    height="210"
                    image={productImg}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ maxHeight: ".5rem" }}>
                        {productName}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{ color: "red" }} size="small">
                        {price}
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ProductCard;
