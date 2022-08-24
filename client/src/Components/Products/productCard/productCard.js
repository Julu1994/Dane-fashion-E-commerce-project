import "./productCard.scss";
import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "../rating";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const [isHovering, setIsHovering] = useState(false);
    const { productName, productImg, price, id } = props;
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            className="card"
            style={{
                margin: isHovering ? "-.1rem" : "0",
                padding: isHovering ? ".2rem" : ".5rem",
                transition: ".5s",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
                <Card
                    sx={{
                        maxWidth: 240,
                        borderRadius: " 1.5rem",
                    }}>
                    <CardMedia
                        component="img"
                        height="180"
                        image={productImg}
                        alt="green iguana"
                    />
                    <CardContent sx={{ maxHeight: ".5rem" }}>
                        <Typography
                            sx={{ maxHeight: ".2rem", fontSize: ".9rem" }}
                            variant="p">
                            {productName}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            sx={{ marginBottom: ".5rem", padding: "0" }}>
                            {price}$
                        </Button>
                        <Rating />
                    </CardActions>
                </Card>
            </Link>
        </div>
    );
};

export default ProductCard;
