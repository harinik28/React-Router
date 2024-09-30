import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
    const navList = [
        "Home",
        "Products",
        "Categories",
        "Cart",
        "Account"
    ]
  return (
    <>
    <nav className='d-flex align-items-center justify-content-between px-5 py-4 bg-dark text-white'>
        <h2 className='mb-0'>E-Commerce Store</h2>
        <ul className='d-flex align-items-center gap-5 list-unstyled fs-5 mb-0'>
            {
                navList.map((item, i) => {
                    return (
                        <Link to={item==="Home"?"/":item.toLowerCase()} className='link text-white'>
                        <li key={i}>{item}</li>
                        </Link>
                    )
                })
            }
        </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Nav