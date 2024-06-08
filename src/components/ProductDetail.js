import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";
import { product } from "./Data";
import { toast } from "react-toastify";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [relatedCategory, setRelatedCategory] = useState([]);

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

  useEffect(() => {
    // eslint-disable-next-line
    const filtered = product.filter((item) => item.id == id);
    setProductDetail(filtered[0]);
    const related = product.filter(
      (p) => p.category === productDetail.category
    );
    console.log(related);
    setRelatedCategory(related);
  }, [id, productDetail.category]);

  return (
    <>
      <h3 className="pro-heading">Product Details</h3>
      <div className="productDetail-wrapper wrap">
        <div className="img card">
          <img src={productDetail.imgSrc} alt="" />
        </div>
        <div className=" text-center">
          <h5 className="card-title">{productDetail.title}</h5>
          <p className="card-text">{productDetail.description}</p>
          <button className="btn btn-primary mx-4">
            {productDetail.price}
          </button>
          <button
            className="btn btn-warning"
            onClick={() =>
              addToCart(
                productDetail.id,
                productDetail.price,
                productDetail.title,
                productDetail.description,
                productDetail.imgSrc
              )
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="related-product">
        <h3>Related Products</h3>
        <Products product={relatedCategory} cart={cart} setCart={setCart} />
      </div>
    </>
  );
};

export default ProductDetail;
