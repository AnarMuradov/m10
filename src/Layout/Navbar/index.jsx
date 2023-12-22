import React from 'react'
import './style.scss'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbarContainer'>
        <div className='navbarContainer__logo'>
          <img src="https://static.tildacdn.com/tild6263-6436-4064-b637-633061366565/M10.svg" alt="" />
        </div>
        <div className='navbarContainer__items'>
          <ul className='navbarContainer__items__list'>
            <li>PAY BY QR</li>
            <li>SECURITY</li>
            <li>FOR BUSINESS</li>
          </ul>
        </div>
        <div className='navbarContainer__language'>
          <select name="" id="">
            <option value="">
              EN
            </option>
            <option value="">
              AZ
            </option>
            <option value="">
              RU
            </option>
          </select>
        </div>
        <div className='navbarContainer__asideBar'>
        <i className="fa-solid fa-bars"></i>
        </div>

        </div>
        

    </nav>
  )
}

export default Navbar