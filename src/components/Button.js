import React from "react";
import'./cssfiles/Button.css';
const STYLE =['btn--primary', 'btn--outline', 'btn--secondary'];
const SIZE =['btn--medium', 'btn--large','btn-small'];

export const Button = ({children, type, onClick , buttonStyle,buttonSize})=>{
    const checkButtonStyle = STYLE.includes(buttonStyle)? buttonStyle: STYLE[0];
    const  checkButtonSize = SIZE.includes(buttonSize)? buttonSize: SIZE[0];
    return(
        <>
            <div className="btn-mobile">
               <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} >{children}</button>
            </div>
        </>
    ) 
}