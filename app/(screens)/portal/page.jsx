"use client"
import Image from "next/image"
import React from "react"
import { LuLayoutDashboard } from "react-icons/lu"
import { HiOutlineDocumentDownload } from "react-icons/hi"
import { MdOutlineSms } from "react-icons/md"
import { HiOutlineMail } from "react-icons/hi"

const Portal = () => {
  return (
    <div className="flex bg-[#f9fafd] min-h-screen">
      {/* sidenav */}
      <div className="flex-[0.2] bg-white p-8">
        <Image
          width={100}
          height={100}
          alt="logo"
          src="/images/logo.png"
          className="mx-auto ml-[-10px]"
        />
        <div className="mt-5 flex flex-col gap-2">
          <div className="active flex items-center gap-3 rounded-lg">
            <LuLayoutDashboard />
            <p>Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineDocumentDownload />
            <p>Generate Data</p>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineSms />
            <p>SMS Zone</p>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineMail />
            <p>Email Zone</p>
          </div>
        </div>
      </div>

      {/* rightside content */}
      <div className="flex-[0.8]">
        {/* top nav */}
        <div></div>

        {/* content area */}
        <div></div>
      </div>
    </div>
  )
}

export default Portal
