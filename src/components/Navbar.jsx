import Link from 'next/link';
import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 py-9 bg-slate-100 text-lg'>
        <div className='bg-purple-200 bg-opacity-50 p-3 rounded-lg shadow-lg font-extralight'>MyBloG</div>
            <ul className='flex justify-between gap-5'>
            <Link href="/">
                <li>Home</li>
                </Link>
              <Link href="/blogs">
                <li>Blogs</li>
                </Link>
            </ul>
            <ul className='flex justify-between gap-5'>
                <li><FaInstagram /></li>
                <li><CiTwitter /></li>
            </ul>

    </div>
  )
}

export default Navbar