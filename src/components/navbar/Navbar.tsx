import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='max-container relative z-30 py-5'>
      <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
        <div className='h-full flex justify-center items-center'>
          {/* <div className='lg:hidden'>
            <Menu />
          </div> */}
          <div className='flex items-center gap-8'>
            <Link href='/' className='flex-center cursor-pointer transition-all hover:font-bold'>About</Link>
            <Link href='/projects' className='flex-center cursor-pointer transition-all hover:font-bold'>Projects</Link>
            <Link href='/research' className='flex-center cursor-pointer transition-all hover:font-bold'>Research</Link>
            <Link href='/blog' className='flex-center cursor-pointer transition-all hover:font-bold'>Blogs</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
