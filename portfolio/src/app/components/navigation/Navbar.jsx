"use client";
import Link from 'next/link'
import React,{useState} from 'react'
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import NavLink from './NavLink';
import Image from "next/image";
import useNavLinks from '../data/NavLinks';




const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navLinks = useNavLinks();
  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'> 
        <div className='flex container lg:py-2 flex-wrap items-center justify-center mx-auto px-4 py-2'>
            <Link href={"/"}>
                <Image 
                    src="/images/Logo-B-NoCircle-BG-Removed.png"
                    alt="Benjamin Logo"
                    className='transform -translate-x-1/2 -translate-y-1/4 left-1/2 lg:translate-x-0 lg:w-20 lg:h-20'
                    width={75}
                    height={75}
                />
            </Link>
            <div className='mobile-menu block md:hidden'>
                {!navbarOpen ? (
                   <button
                    onClick={() => setNavbarOpen(true)}
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                   >
                    <Bars3Icon className="h-5 w-5"/>
                   </button>
                ): (
                    <button
                        onClick={() => setNavbarOpen(close)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                        <XMarkIcon className="h-5 w-5"/>
                    </button>
                )}
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links= {navLinks} /> : null}
    </nav>
  )
}

export default Navbar