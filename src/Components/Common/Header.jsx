import React, { useState } from 'react'
import logo from '../../Imgs/logo.png'
import { Link } from "react-router-dom"
import {navlink} from '../Data/dummydata'
import { Menu } from "@mui/icons-material"

const Header = () => {

    const[responsive, setResponsive] = useState(false)

  return (
    <div>
      <header>
      <div className='container dflexsb'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className={responsive ? 'hidMenu' : 'nav'}>
            {navlink.map((links, i) => (
                <Link to={links.url} key={i}>{links.text}</Link>
            ))}
        </div>

        <button onClick={()=> setResponsive(!responsive)} className='toggle'>
            <Menu className='icon'></Menu>
        </button>
      </div>
      </header>
    </div>
  )
}

export default Header
