import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard(props) {
    const { productName, productImg, price } = props;
    return (
        <Card sx={{ maxWidth: 345, maxHeight: 385 }}>
            <CardMedia
                component="img"
                height="160"
                image={productImg}
                alt="green iguana"
                sx={{
                    padding: "1em 1em 0 1em",
                    objectFit: "contain",
                    paddingBottom: "2rem",
                    background:
                        "linear-gradient(0deg, rgba(255, 182, 193, 0.48783263305322133) 25%, rgba(254, 181, 192, 0.3393732492997199) 58%, rgba(255, 218, 185, 0.41780462184873945) 100%, rgba(232, 218, 200, 0.8953956582633054) 100%);",
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
