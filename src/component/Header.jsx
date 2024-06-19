import React from 'react'
import "./Header.scss"
// import headerImage from "../images/bg-pattern-intro-mobile.svg"


const Header = () => {
  return (
    <>
      <div className='header'>
        {/* <img className='headimg' src={headerImage} alt="" srcset="" /> */}
         <div className='navbar'>
          <div className='logo'>
            <img src="../" alt="" srcset="" />
          </div>
          <ul>
          <li>product</li>
          <li>Company</li>
          <li>Connect</li>
          <div className='reg'>
         <p className='log'>login</p>
         <button className='sign'>signup</button>
         </div>
          </ul>
         
         

          </div>
          <h2>A modern publishing platorm</h2>
          <p>Grow your audience and build your online brand</p>
          <button className='start'>Start for free</button>
          <button className='learn'>Learn More</button>

      </div>
    </>
  )
}

export default Header
