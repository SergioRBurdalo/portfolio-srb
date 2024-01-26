import React from 'react'
import NavLink from './NavLink';

const MenuOverlay = ({navLinks}) => {
  return (
    <ul className=' flex-col py-4 items-center flex md:hidden'>
        {
        navLinks.map((link, index)=>(
        <li key={index}>
            <NavLink href={link.path} title={link.title}></NavLink>
        </li>   
        ))
        }
    </ul>
  )
}

export default MenuOverlay