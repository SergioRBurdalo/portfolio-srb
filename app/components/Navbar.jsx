"use client";
import Link from 'next/link';
import React, {useState} from 'react';
import NavLink from './NavLink';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

import logoDesktop from '../assets/logoNavBarwhite.png';  // Imagen para escritorio
import logoMobile from '../assets/logoNBG-white copia.png';  // Imagen para móvil

const Navbar = ({navLinks}) => {
    const [navbarOpen, setNavarOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={"/"}>
                    {/* Imagen para escritorio */}
                    <Image
                        src={logoDesktop}
                        alt="Logo"
                        width={300}
                        height={60}
                        className='mt-2 ml-2 hidden sm:block object-contain'
                    />
                    {/* Imagen para móvil */}
                    <Image
                        src={logoMobile}
                        alt="Logo"
                        width={50}
                        height={50}
                        className='mt-2 ml-2 block sm:hidden object-contain'
                    />
                </Link>
                <div className='mobile-menu block md:hidden '>
                {!navbarOpen ? (
                        <button onClick={()=>setNavarOpen(true)} className='flex items-center  hover:text-white hover:border-white px-3 py-2 border rounded border-slate-200 text-slate-200 '>
                            <Bars3Icon className=' h-5 w-5'/>
                        </button>
                    ) : (
                        <button onClick={()=>setNavarOpen(false)} className='flex  items-center  hover:text-white hover:border-white px-3 py-2 border rounded  border-slate-200 text-slate-200'>
                            <XMarkIcon className=' h-5 w-5'/>
                        </button>
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link, index)=>(
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}></NavLink>
                            </li>   
                            ))
                        }
                    </ul>
                </div>
            </div>
            { navbarOpen ? <MenuOverlay navLinks={navLinks}/> : null}
        </nav>
    )
}

export default Navbar;
