import React, {useRef, useEffect} from "react";
import {gasp } from "gasp";
import{ ScrollTrigger} from "gasp/ScrollTrrigger";

gasp.registerPlugin(ScrollTrigger);

export default function Features(){
    let text  = useRef(null);
    useEffect(()=>{
        gasp.to(text,{
            dealy:0.4,
            duration:1, 
            x: '0',
            ease:'ease-in',
            scrollTrigger:{
                trigger:text,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete',
            },
        });
    },[]);
    return (
        <div className="feautures">
          <div className="feautures--container" >
          <div className="heading" ref={el=> {text=el}} >
            <h2 >Features</h2>
            <h1>What we Offer</h1>
            <div className="features--services">
              <p className="feature--item"> <i className="fas fa-check-circle"></i>Group Fitness Classes</p>
              <p className="feature--item"> <i className="fas fa-check-circle"></i>Personal Trainer Sessions</p>
              <p className="feature--item"> <i className="fas fa-check-circle"></i>Indoor Pool</p>
              <p className="feature--item"> <i className="fas fa-check-circle"></i>Steam Room and Souna</p>
              <p className="feature--item"> <i className="fas fa-check-circle"></i>Basketball Court</p>
              <p className="feature--item"> <i className="fas fa-check-circle"></i>Open 24/7</p>
            </div>
            </div>
          
            <div className="image" >
               <img className="features--image" src="https://wallpapercave.com/wp/wp3867926.jpg" alt="gym"/>
            </div>
          </div>
        </div>)
}