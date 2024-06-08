import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const date = Date();
  return (
    <>
      <div className="container my-5" style={{ width: "50%" }}>
        {cart.length === 0 ? (
          <>
            <div className="text-center">
              <h2>Your cart is empty</h2>
              <Link to={"/"} className="btn btn-warning">
                Continue shopping...
              </Link>
            </div>
          </>
        ) : (
          <>
            {cart.map((p) => (
              <div
                key={p.id}
                className="card mb-3 my-3"
                style={{ maxWidth: 700 }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={p.imgSrc}
                      className="img-fluid rounded-start"
                      alt="img"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{p.title}</h5>
                      <p className="card-text">{p.category}</p>
                      <p className="card-text">{p.description}</p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          <b>Date: </b>
                          {date}
                        </small>
                      </p>
                      <button className="btn btn-primary mx-4">
                        {p.price}
                      </button>
                      <button className="btn btn-warning">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      {cart.length !== 0 && (
        <div
          className="container text-center my-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="btn btn-warning mx-5">Checkout</button>
          <button className="btn btn-danger" onClick={() => setCart("")}>
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
