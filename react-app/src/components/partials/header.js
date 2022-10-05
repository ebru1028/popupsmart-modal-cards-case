import React, { useState } from 'react'

export default function Header() {

  const [mobileMenuActive, setMobileMenuActive] = useState('');

  const handleSubmit = (e) =>{
    if(mobileMenuActive == 'active')
    setMobileMenuActive('')
    else
    setMobileMenuActive('active')
  }

  return (
    <section className='header'>
      <div className='wrapper'>
        <div className='inner'>
          <div className='menu'>
            <div className='logo'>
              <a href='/'>
                <img src='/images/logo.png' alt='' />
                modal.cards
              </a>
            </div>

            <nav className='menu-item'>
              <ul>
                <li className='dropdown'>
                  <a href='#'>Solutions <i className="fa-solid fa-chevron-down"></i> </a>
                  <ul className='sub-menu'>
                    <li><a href="#" target="_blank"> Solutions 1</a></li>
                    <li><a href="#" target="_blank"> Solutions 2</a></li>
                  </ul>
                </li>
                <li>
                  <a href='#'> Product Tour</a>
                </li>
                <li>
                  <a href='#'> Showcase</a>
                </li>
                <li>
                  <a href='#'> Pricing</a>
                </li>
              </ul>
            </nav>

            <a href="#" className='btn-menu-toggle' onClick={handleSubmit}>
             <i className="fa-solid fa-bars"></i>
             </a>
          </div>

          <nav className={`mobile-menu-item ${mobileMenuActive}`}>
              <ul>
                <li className='dropdown'>
                  <a href='#'>Solutions <i className="fa-solid fa-chevron-down"></i> </a>
                  <ul className='sub-menu'>
                    <li><a href="#" target="_blank"> Solutions 1</a></li>
                    <li><a href="#" target="_blank"> Solutions 2</a></li>
                  </ul>
                </li>
                <li>
                  <a href='#'> Product Tour</a>
                </li>
                <li>
                  <a href='#'> Showcase</a>
                </li>
                <li>
                  <a href='#'> Pricing</a>
                </li>
              </ul>
          </nav>
          
          <div className='settings'>
            <a href='#' className='sign-in'>Sign in</a>
            <a href='#' className='btn-try'>Try for free</a>
          </div>
        </div>
      </div>
    </section>
  )
}
