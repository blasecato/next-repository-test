import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from "@/app/components";


const navItems = [
  { path: "/about", title: 'About' },
  { path: "/pricing", title: 'Pricing' },
  { path: "/contact", title: 'Contact' },
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href="./" className='flex items-center justify-center gap-2'>
        <HomeIcon />
        Home
      </Link>
      <div className='flex-1'></div>
      {navItems?.map((item) => (
        <ActiveLink key={item.path} path={item.path} text={item.title} />
      ))}
    </nav>
  )
}