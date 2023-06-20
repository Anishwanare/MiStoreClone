import React from "react";
import "../styles/hotitemcard.css"

const HotItemCard = ({name,image,price,index}) => {
  return (
    <div className="hotItemCard">
      <img src={image} alt={`${index} Product`} />
      <p>{name}</p>
      <span>{price}</span>
  </div>
    ) ;
};

export default HotItemCard;
