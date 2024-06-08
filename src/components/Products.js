import React from "react";
// import { product } from "./Data";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ product, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    toast.success("product added successfully 😊");
  };

  return (
    <>
      {/* <div className="heading">
        <h3>Products</h3>
      </div> */}
      <div className="container">
        <div className="row">
          {product.map((p) => (
            <div
              key={p.id}
              className="col-lg-4 col-md-6 col-ms-1 my-3 text-center"
            >
              <div className="card" style={{ width: "18rem" }}>
                <Link
                  to={`/product/${p.id}`}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={p.imgSrc} className="card-img-top" alt="mobile" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 25) + "..."}
                  </p>
                  <button className="btn btn-primary mx-4">{p.price}</button>
                  <button
                    className="btn btn-warning"
                    onClick={() =>
                      addToCart(p.id, p.price, p.title, p.description, p.imgSrc)
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
