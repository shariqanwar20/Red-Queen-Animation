import React from 'react'
import planeImg from "../images/plane.gif";
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css'


export const PlaneAnim = () => {
    const { ref, playState } = useWebAnimations({
        keyframes: [
            {transform: 'translate(0, 0)'}, {transform: 'translate(500px, 150px)'}, {transform: 'translate(750px, 200px)'}, {transform: 'translate(1000px, 250px)'}, {transform: 'translate(1200px, 300px)'}, {transform: 'translate(1400px, 330px)'}, {transform: 'translate(1500px, 330px)'}, {transform: 'translate(1900px, 330px)'}  
        ],
        timing: {
          duration: 13000,
          iterations: Infinity
        }
    });
    return (
        <div className="plane-div">
            {console.log(playState)}
            <img src={planeImg} alt="plane" ref={ref}/>
        </div>    
    )
}
