import React from "react";

const Offer = ({src,index,link}) => {
  return (
    <span>
      <a href={link}>
        <img src={src} alt={`${index} Offer`} />
      </a>
    </span>
  );
};

export default Offer;
