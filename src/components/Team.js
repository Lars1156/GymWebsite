import React,{useRef,useEffect} from "react";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './cssfiles/Team.css';

gsap.registerPlugin(ScrollTrigger);

export default function Team(){

    let img1 = useRef (null);
    let img2 = useRef(null);
    let img3 = useRef(null);
    let img4 = useRef(null);

    useEffect(()=>{
        gsap.to(img1,{duration:1,
            x: '0',
            opacity:1,
            ease: 'ease-in',
            scrollTrigerr:{
                trigger: img1,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions:'restrat complete',
            },
        });
        gsap.to(img2, {
            duration: 1,
            x: '0',
            opacity: 1,
            ease: 'ease-in',
            scrollTrigger: {
              trigger: img2,
              start: 'top 90%',
              end: 'bottom 60%',
              toggleActions: 'restart complete ',
              //options: play, pause, resume, reset, restart, complete, reverse,none
            },
          });
          gsap.to(img3, {
            duration: 1,
            x: '0',
            opacity: 1,
            ease: 'ease-in',
            scrollTrigger: {
              trigger: img3,
              start: 'top 90%',
              end: 'bottom 60%',
              toggleActions: 'restart complete ',
              //options: play, pause, resume, reset, restart, complete, reverse,none
            },
          });
          gsap.to(img4, {
            duration: 1,
            x: '0',
            opacity: 1,
            ease: 'ease-in',
            scrollTrigger: {
              trigger: img4,
              start: 'top 90%',
              end: 'bottom 60%',
              toggleActions: 'restart complete ',
              //options: play, pause, resume, reset, restart, complete, reverse,none
            },
          });
    }, []);
    
     return(
        <div className="team">
            <div className="team----wrappers">
                <div className="team---text">
                    <h2>Private Coching</h2>
                    <h1>Meet Our Trainners</h1> <p>All our personal trainers have over 30 years of experience combined. Each trainer specializes in strength and monbility workouts.</p>
                </div>
            </div>
        </div>
     )
}