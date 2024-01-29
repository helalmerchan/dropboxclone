import { UserButton } from '@clerk/nextjs'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919]">
        <div className="p-10 flex h-full flex-col bg-[#2b2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-3xl font-bold">Welcome to Dropbox <br /><br />
            Storing everything for you and your business. you get a full suite of tools designed to help you create, share, manage, and track content more efficiently. Plus, proven
          </h1>
          <p>With Dropbox, you get a full suite of tools designed to help you create, share, manage, and track content more efficiently. Plus, proven cloud storage you can trust.</p>

          <Link href="/dashboard" className="flex bg-blue-500 w-fit p-6">
            Try it for Free
            <ArrowRight className="ml-10"/>
          </Link>
        </div>
        <div className="bg-[#1E1919] dark:bg-state-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>

      <p className="text-center text-xl font-bold pt-5">Disclaimer</p>
      <p className="text-center pt-5">This website is made for practice and educational purposes only. We do not own or affiliate with Dropbox and/or any of its subsidiaries in any form. Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” of this video for education purposes.</p>
    </main>
    
  )
}
