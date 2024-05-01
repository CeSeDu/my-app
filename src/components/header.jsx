import React from 'react'
import bg from "@/assets/header.png";

const Header = () => {
  return (
    <div className='grid justify-center items-center p-36 m-12 shadow-2xl shadow-purple-950 rounded-3xl' style={{ backgroundImage: "url(" + bg.src + ")" }} >
        <h1 className='text-5xl w-1/2 text-center m-auto p-24 rounded-lg bg-custom-image  text-black  underline'></h1>
    </div>
  )
}

export default Header