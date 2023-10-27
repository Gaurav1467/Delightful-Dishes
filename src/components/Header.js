import React from 'react'
import {ImSpoonKnife} from 'react-icons/im'

function Header() {
  return (
    <header className='header' style={{ backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/03/04/51/64/1000_F_304516429_TZ9YH9T2Mj3ycQ55TA8M7SHt2KS43g4N.jpg)` }}>
        <div className='layer'>
        <div className="container">
          <nav className='logo-wrapper'>
            <div className='logo'>
              <ImSpoonKnife className='brand' />
            </div>
          </nav>
          <div className='header-text' >
            <h1>Delightful Dishes</h1>
            <p>Embracing the symphony of tastes on your plate</p>
          </div>

        </div>
        </div>
      </header>
  )
}

export default Header