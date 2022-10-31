import React from 'react'
import Logo from '../../images/logo.svg'
import './Header.css'
import MenuIcon from '../../images/icon-menu.svg'
import MenuClose from '../../images/icon-menu-close.svg'
import $ from 'jquery';
import {useEffect} from 'react'



function Header() {

  useEffect(() => {
    if($){
      $('.menuIcon').click(e=>{
         $('.HideMenu').show()
      })

    }
  }, [$])

  useEffect(() => {
    if($){
      $('.iconMenuClose').click(e=>{
         $('.HideMenu').hide()
      })

    }
  }, [$])

  return (

    <div className='header'>
      <div className="logoSec">
           <img src={Logo} alt="logo" />
      </div>
      <div className="menuIcon">
          <img src={MenuIcon} alt="" />
        </div>  
      <div className="navSec"> 
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Catagories</a></li>
        </ul>       
      </div>

      <div className="HideMenu">
        <div className="iconMenuClose">
          <img src={MenuClose} alt="" />
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Catagories</a></li>
        </ul>
      </div>
    </div>

  )
}

export default Header
