import { Carousel, CarouselItem } from "react-bootstrap";
import React from "react";


const Banner = ({banner}) => {
  return(
      <Carousel>

    {banner.end.map((item,index)=>(
        <CarouselItem key={item.image} id="banner" interval={1000} keyboard={true}>
            <img src={item.image} alt={`${index} Image`} />

            <Carousel.Caption>
                <h3>{item.name}</h3>
                <p style={{color:"white"}}>{item.description}</p>
                <p style={{color:"orangeRed"}}>{item.source}</p>
                <b>Read-More</b>
            </Carousel.Caption>
        </CarouselItem>
        ))}
        </Carousel>
    );
};

export default Banner;
