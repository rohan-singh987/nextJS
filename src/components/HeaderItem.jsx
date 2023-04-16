import React from 'react'
import Link from 'next/link'

const HeaderItem = ({title, add, Icon}) => {
  return (
    <>
        <Link href={add} className='flex items-center mx-3 text-[#576CBC] hover:text-[#569DAA] '>
            <Icon className='mx-1 text-2xl' />
            <span className=' hidden sm:inline text-xl'>
                {title}
            </span>
        </Link>

    </>
  )
}

export default HeaderItem