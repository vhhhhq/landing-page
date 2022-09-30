import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <main className='main'>
        <div className='link-discover'>
          <a href="">Discovery</a>
        </div>
        <div className='link-menu'>
          <div className='link'>
            <a href="">About</a>
          </div>
          <div className='link'>
            <a href="">Gallery</a>
          </div>
          <div className='link'>
            <a href="">Blogs</a>
          </div>
        </div>
      </main>
    </header>
  )
}

export default Header