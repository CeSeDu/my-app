import Link from 'next/link';
import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 py-9 bg-slate-100 text-lg'>
           <Link href="/">
        <div className='bg-purple-200 bg-opacity-50 p-3 rounded-lg shadow-lg font-extralight  text-gray-600'>MyBloG</div>
        </Link>
            <ul className='flex justify-between gap-5 text-purple-900'>
            <Link href="/">
                <li>Home</li>
                </Link>
              <Link href="/fullBlogCards">
                <li>Blogs</li>
                </Link>
            </ul>
            <ul className='flex justify-between gap-5'>
              <Link href="https://www.instagram.com/">
              <li><FaInstagram /></li>
              </Link>
              <Link href="https://twitter.com/?lang=en">
                <li><CiTwitter /></li>
              </Link>
            </ul>

    </div>
  )
}

export default Navbar