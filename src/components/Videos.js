import React from "react";
import VideoCard from "./VideoCard.js"
import "../styles/videos.css";

const Videos = ({video}) => {
  return (

    <div className="video">
        {video.map((item,index)=>(
            <VideoCard name={item.name} image={item.image} index={index} key ={item.image}/>
        ))}
    </div>
  )
};

export default Videos;
