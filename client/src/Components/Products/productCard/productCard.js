import "./productCard.scss";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "../rating";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const { productName, productImg, price, id } = props;

    return (
        <div
            className="card"
            style={{
                height: "100%",
                margin: "0",
                padding: ".2rem",
            }}>
            <Card
                sx={{
                    maxWidth: "18rem",
                    borderRadius: " 1.5rem",
                    height: "100%",
                    ml: "auto",
                    mr: "auto",
                }}>
                <Link
                    to={`/product/${id}`}
                    style={{ textDecoration: "none", color: "black" }}>
                    <CardMedia
                        component="img"
                        height="220"
                        image={productImg}
                        alt="green iguana"
                    />
                    <CardContent sx={{ maxHeight: ".5rem" }}>
                        <Typography
                            sx={{
                                maxHeight: ".2rem",
                                fontSize: ".8rem",
                                ml: "-.5rem",
                            }}
                            variant="p">
                            {productName}
                        </Typography>
                    </CardContent>

                    <CardActions
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                        <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            sx={{
                                marginBottom: ".5rem",
                                padding: "0",
                            }}>
                            {price}$
                        </Button>
                        <Rating />
                    </CardActions>
                </Link>
            </Card>
        </div>
    );
};

export default ProductCard;
