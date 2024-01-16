"use client"
// import { BuildingStorefrontIcon, UserIcon } from '@heroicons/react/20/solid'
import {useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = (params:any) => {
  const [selected, setselected] = useState(params.params)
  const router = useRouter()
  return (
    <div className='flex justify-between px-5 pt-5 pb-3 shadow-xl fixed w-full z-10 bg-slate-50 '>
      <div className="flex">
        {/* <BuildingStorefrontIcon className='flex h-6 w-6 text-blue-500 text-center hover:cursor-pointer'/> */}
        <p className='text-blue-500 text-center pl-3 font-bold'>Make Engineering Easy</p>
      </div>
      <div className="flex w-full justify-center fixed ">
        <h1 onClick={() => {router.push("/") , setselected(params)}} className={`${selected === "Home" ? "border-b-2 border-blue-500 font-semibold" : ""} uppercase mx-5 hover:cursor-pointer transition-all duration-300`}>home</h1>
        <h1 onClick={() => {router.push("/Course") , setselected(params)}} className={`${selected === "Courses" ? "border-b-2 border-blue-500 font-semibold" : ""} uppercase mx-5 hover:cursor-pointer transition-all duration-300`}>courses</h1>
        <h1 onClick={() => {router.push("/About"), setselected(params)}} className={`${selected === "About" ? "border-b-2 border-blue-500 font-semibold" : ""} uppercase mx-5 hover:cursor-pointer transition-all duration-300`}>about us</h1>
      </div>
      <div className="flex">
        <div className="flex flex-col text-center ">
        {/* <UserIcon className="flex h-6 w-6 text-blue-500 text-center hover:cursor-pointer"/> */}
        {/* <h1 className='text-xs'>login</h1> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
