import React from "react";
import "../styles/ProductReview.css";

const ProductReview = ({name,price,review,image,index}) => {
  return (
    <div className="productReview">
        <img src={image} alt={`${index} Review`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
    )
};

export default ProductReview;
