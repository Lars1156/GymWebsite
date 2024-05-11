import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


export default function NAvbar(){
  const [click , setClick] = useState(false);

  function handleClick(){
    setClick(click);
  }
  function closeMobileMenu(){
    setClick(false);
  }
  return(
     <>
       <nav className='navbar'>
        <div className='navbar-container'>
          <ul className= {click ?'nav-menu-active': 'nav-menu'}>
              <li className='nav-item'>
                <a href='/' className='nav-links' onClick={closeMobileMenu}>Home</a>
              </li>
              <li className='nav-item'>
                <a href='/Features' className='nav-links' onClick={closeMobileMenu}>Features</a>
              </li>
              <li className="nav-item"> <a href="/Plans" className="nav-links" onClick={closeMobileMenu}> Plans </a></li>
             <li className="nav-item"> <a href="/Trainers" className="nav-links" onClick={closeMobileMenu}> Trainers </a></li>
          </ul>
        </div>
       </nav>
     </>
  )
}