import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../contexts/ProductContextProvidex";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useSearchParams } from "react-router-dom";
import { TextField } from "@mui/material";
import styles from "../style.modules.css";
const ProductCard = () => {
  const { products, getProducts, deleteProduct } = useContext(productContext);
  let [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  return (
    <div>
      <Link to={"/add"}>
        {" "}
        <Button>Add</Button>
      </Link>
      <h1 style={{ margin: "30px 0" }}>Product Card</h1>
      <TextField
        sx={{ width: "250px", height: "40px" }}
        variant="outlined"
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="container">
        {products.map((elem, index) => (
          <Card sx={{ maxWidth: 370, marginBottom: "20px" }} key={index}>
            <CardMedia
              sx={{ height: 140 }}
              image={elem.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {elem.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {elem.description}
              </Typography>
            </CardContent>
            <CardActions className={styles.btns}>
              <Link to={`/detail/${elem.id}`}>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  style={{ margin: "5px" }}
                >
                  {" "}
                  Details
                </Button>
              </Link>
              <Link to={`edit/${elem.id}`}>
                {" "}
                <Button size="small" variant="contained">
                  Edit
                </Button>
              </Link>
              <Button
                size="small"
                variant="contained"
                color="error"
                onClick={() => deleteProduct(elem.id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
