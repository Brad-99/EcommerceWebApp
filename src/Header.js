import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
<div className="header">

    <img 
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />

    <div
        className='header__search'>
        <input
        className="header__searchInput" type="text"/>
        <SearchIcon
        className="header__searchIcon" />
    </div>
    
    <div className="header__nav">
        <div className="header__option1">
            <span
            className='header__optionLineOne'>Hello Guest</span>
            <span
            className='header__optionLineOne'>Sign In</span>
        </div>

        <div className="header__option2">
            <span
            className='header__optionLineOne'>Return</span>
            <span
            className='header__optionLineOne'>& Orders</span>
        </div>

        <div className="header__option3">
            <span
            className='header__optionLineOne'>Your</span>
            <span
            className='header__optionLineOne'>Prime</span>
        </div>
    </div>   
 </div>
  )
}

export default Header