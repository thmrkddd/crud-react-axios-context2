import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../contexts/ProductContextProvidex";
import { Link, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const EditProduct = () => {
  const { saveEditedProduct, getOneProduct, oneProduct } =
    useContext(productContext);
  const { id } = useParams();
  const [productToEdit, setProductToEdit] = useState(oneProduct);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProductToEdit(oneProduct);
  }, [oneProduct]);
  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = { ...productToEdit, [e.target.name]: Number(e.target.value) };
      setProductToEdit(obj);
    } else {
      let obj = {
        ...productToEdit,
        [e.target.name]: e.target.value,
      };
      setProductToEdit(obj);
    }
  };
  return (
    <div>
      <h1>Edit Product</h1>
      {productToEdit ? (
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
            onChange={handleInp}
            value={productToEdit.name}
            placeholder="name"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="description"
            onChange={handleInp}
            value={productToEdit.description}
            placeholder="description"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="number"
            name="price"
            value={productToEdit.price}
            onChange={handleInp}
            placeholder="price"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="search"
            name="image"
            onChange={handleInp}
            value={productToEdit.image}
            placeholder="image"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="type"
            onChange={handleInp}
            value={productToEdit.type}
            placeholder="type"
          />
          <Link to={"/"}>
            {" "}
            <Button
              variant="contained"
              onClick={() => {
                saveEditedProduct(productToEdit);
              }}
            >
              Edit Product
            </Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default EditProduct;
