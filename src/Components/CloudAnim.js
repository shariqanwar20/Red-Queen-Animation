import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import cloudImg from "../images/cloud.png";

export const CloudAnim = () => {
    const { ref, playState } = useWebAnimations({
        keyframes: [
            {transform: 'translate(100%, 0)'}, {transform: 'translate(-100%, 0)'}
        ],
        timing: {
          duration: 3000,
          iterations: Infinity
        }
      });
    return (
        <div className="cloud-div" ref={ref}>
            <img src={cloudImg} alt="cloud"/>
            {console.log(playState)}
            <img src={cloudImg} alt="cloud"/>
        </div>
    )
}
