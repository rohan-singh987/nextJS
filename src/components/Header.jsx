import React from 'react'
import HeaderItem from './HeaderItem'
import {FaHome} from "react-icons/fa"
import {BsFillInfoCircleFill} from "react-icons/bs"

const Header = () => {
  return (
    <div className='flex justify-between p-2 bg-[#EEEEEE]'>
        <div className='font-bold text-3xl' >
            logo
        </div>
        <div className='flex px-5 ' >
            <HeaderItem title={'Home'} add={"/"} Icon={FaHome} />
            <HeaderItem title={'About'} add={"/about"} Icon={BsFillInfoCircleFill} />
        </div>
    </div>
  )
}

export default Header