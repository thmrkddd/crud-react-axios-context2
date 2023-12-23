import React, { useContext, useState } from "react";
import { productContext } from "../contexts/ProductContextProvidex";
import { Button, Container, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const initProduct = {
    name: "",
    description: "",
    price: "",
    image: "",
    type: "",
  };
  const [product, setProduct] = useState(initProduct);
  function handleAddProduct(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  }
  function saveProduct() {
    if (
      !product.name.trim() ||
      !product.description.trim() ||
      !product.price.trim() ||
      !product.image.trim() ||
      !product.type.trim()
    )
      return;
    addProduct(product);
    setProduct({
      name: "",
      description: "",
      price: "",
      image: "",
      type: "",
    });
  }
  return (
    <Container>
      {" "}
      <h2 style={{ margin: "30px 0" }}>Add Product</h2>
      <div
        style={{
          display: "flex",
          margin: "50px auto",
          width: "30%",
          flexDirection: "column",
        }}
      >
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="name"
          value={product.name}
          onChange={handleAddProduct}
          placeholder="name"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="description"
          value={product.description}
          onChange={handleAddProduct}
          placeholder="description"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="number"
          name="price"
          value={product.price}
          onChange={handleAddProduct}
          placeholder="price"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="search"
          name="image"
          value={product.image}
          onChange={handleAddProduct}
          placeholder="image"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="type"
          value={product.type}
          onChange={handleAddProduct}
          placeholder="type"
        />
        <Link to={"/"}>
          {" "}
          <Button variant="contained" onClick={saveProduct}>
            Add Product
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default AddProduct;
