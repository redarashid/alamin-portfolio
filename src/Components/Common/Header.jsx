import React from 'react'
import logo from '../../Imgs/logo.png'
import { Link } from "react-router-dom"
import {navlink} from '../Data/dummydata'

const Header = () => {
  return (
    <div>
      <div className='container dflexsb'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className='nav'>
            {navlink.map((links, i) => (
                <Link to={links.url} key={i}>{links.text}</Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Header
