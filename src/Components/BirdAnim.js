import React from 'react'
import birdImg from "../images/bird.gif";

export const BirdAnim = () => {
    
    return (
        <div className="bird-div">
            <img src={birdImg} alt="bird" />
            <br />
            <img src={birdImg} alt="bird" />
        </div>
    )
}
