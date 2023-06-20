import React from "react";
import ProductReview from "./ProductReview.js";
import "../styles/productReviews.css";

const ProductReviews = ({review}) => {
  return (
    <div className="productReviews">
      {review.map((item, index) => (
        <ProductReview
          image={item.image}
          review={item.review}
          name={item.name}
          price={item.price}
          key={item.image}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
