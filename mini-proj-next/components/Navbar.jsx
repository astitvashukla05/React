import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='top-0 sticky bg-black border-amber-300 w-full text-white p-3'>
        <div className='flex justify-baseline items-center'>
        {/* logo */}
            <div className='flex-shrink-0 mx-6'>
               <Link href={'/'} className='text-amber-600 font-bold'>
                 MyProject
                </Link>
            </div>
            {/* NavLinks */}
            <div className='ml-5'>
                <Link href={'/'} className='text-amber-600 font-bold'>
                 Home
                </Link>
            </div>
            <div className='ml-5'>
                <Link href={'/about'} className='text-amber-600 font-bold'>
                 About
                </Link>
            </div>
            <div className='ml-5'>
                <Link href={'/contact'} className='text-amber-600 font-bold'>
                 Contact
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar