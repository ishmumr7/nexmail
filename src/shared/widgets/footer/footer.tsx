import Link from 'next/link'
import React from 'react'
import FooterLogo from './footer.logo'

const Footer = () => {
  return (
    <footer className='w-full bg-[#060518] text-white pt-10'>
      <div className="w-[95%] md:flex m-auto py-5">
        <div className="w-full md:w-[40%]">
          <Link href="/">
            <FooterLogo />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer