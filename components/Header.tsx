import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggoler } from './ThemeToggoler';

function Header() {
  return <header className="flex items-center justify-between"> 
    <Link href='/' className="flex items-center space-x-2">
      <div className=" bg-[#0f82e2] w-fit ">
        <Image 
          src="https://www.shareicon.net/data/128x128/2016/11/26/857749_service_512x512.png"
          alt="LOGO" className="invert" width={50} height={50}
        />
      </div>
      <h1 className="font-bold text-xl">Dropvox</h1>
    </Link>

    <div className="px-5 flex space-x-2 items-center">
      <ThemeToggoler/>
      
      <UserButton afterSignOutUrl="/"/>

      <SignedOut>
        <SignInButton afterSignInUrl="/dashboard" mode="modal"/>
      </SignedOut>
    </div>
  </header>;
}

export default Header