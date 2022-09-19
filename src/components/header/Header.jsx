import React from 'react'
import './header.css'
import ME from '../../assets/man.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aravindh</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA></CTA>

        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
