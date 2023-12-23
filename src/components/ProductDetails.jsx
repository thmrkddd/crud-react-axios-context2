import React, { useContext, useEffect } from "react";
import { productContext } from "../contexts/ProductContextProvidex";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const ProductDetails = () => {
  const { getOneProduct, oneProduct } = useContext(productContext);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return (
    <div>
      <h1>Product Details</h1>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {oneProduct ? (
          <Card sx={{ MaxWidth: 545, marginBottom: "20px" }}>
            <CardMedia
              component="img"
              height="170px"
              sx={{ objectFit: "contain" }}
              image={oneProduct.image}
              title="product image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name: {oneProduct.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: {oneProduct.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {oneProduct.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {oneProduct.type}
              </Typography>
            </CardContent>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </Card>
        ) : null}
      </Container>
    </div>
  );
};

export default ProductDetails;
