"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { LuLayoutDashboard } from "react-icons/lu"
import { HiOutlineDocumentDownload } from "react-icons/hi"
import { MdOutlineSms } from "react-icons/md"
import { HiOutlineMail } from "react-icons/hi"
import Dashboard from "@/app/(modules)/Dashboard"
import Generate from "@/app/(modules)/Generate"
import SMS from "@/app/(modules)/SMS"
import Email from "@/app/(modules)/Email"

const Portal = () => {
  const [currentPage, setCurrentPage] = useState("dashbaord")

  const setPage = (page) => {
    setCurrentPage(page)
  }

  // custom page
  const customPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />
      case "generate":
        return <Generate />
      case "sms":
        return <SMS />
      case "email":
        return <Email />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex bg-[#f9fafd] min-h-screen">
      {/* sidenav */}
      <div className="flex-[0.2] bg-white p-8 shadow">
        <Image
          width={100}
          height={100}
          alt="logo"
          src="/images/logo.png"
          className="mx-auto ml-[-10px]"
        />
        <div className="mt-5 flex flex-col gap-3">
          <div
            className={`${
              currentPage === "dashboard" ? "active" : "nav"
            } flex items-center gap-3 rounded-lg cursor-pointer p-2`}
            onClick={() => setPage("dashboard")}
          >
            <LuLayoutDashboard />
            <p>Dashboard</p>
          </div>
          <div
            className={`${
              currentPage === "generate" ? "active" : "nav"
            } flex items-center gap-3 rounded-lg  cursor-pointer p-2`}
            onClick={() => setPage("generate")}
          >
            <HiOutlineDocumentDownload />
            <p>Generate Data</p>
          </div>
          <div
            className={`${
              currentPage === "sms" ? "active" : "nav"
            } flex items-center gap-3 rounded-lg  cursor-pointer p-2`}
            onClick={() => setPage("sms")}
          >
            <MdOutlineSms />
            <p>SMS Zone</p>
          </div>
          <div
            className={`${
              currentPage === "email" ? "active" : "nav"
            } flex items-center gap-3 rounded-lg  cursor-pointer p-2`}
            onClick={() => setPage("email")}
          >
            <HiOutlineMail />
            <p>Email Zone</p>
          </div>
        </div>
      </div>

      {/* rightside content */}
      <div className="flex-[0.8]">
        {/* top nav */}
        <div className="h-[10vh] bg-white shadow w-full"></div>

        {/* content area */}
        <div className="p-6">{customPage()}</div>
      </div>
    </div>
  )
}

export default Portal
