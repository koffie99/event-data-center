// "use client"
// import Image from "next/image"
// import React, { useEffect, useState } from "react"
// import { LuLayoutDashboard } from "react-icons/lu"
// import { HiOutlineDocumentDownload } from "react-icons/hi"
// import { MdOutlineSms } from "react-icons/md"
// import { HiOutlineMail } from "react-icons/hi"
// import Dashboard from "@/app/(modules)/Dashboard"
// import Generate from "@/app/(modules)/Generate"
// import SMS from "@/app/(modules)/SMS"
// import Email from "@/app/(modules)/Email"
// import { RiMenu2Fill } from "react-icons/ri"
// import { GoPerson } from "react-icons/go"

// const Portal = () => {
//   let myPage
//   if (typeof sessionStorage != "undefined") {
//     myPage = sessionStorage.getItem("myPage")
//   }

//   const [currentPage, setCurrentPage] = useState(myPage || "dashbaord")

//   const setPage = (page) => {
//     setCurrentPage(page)
//     sessionStorage.setItem("myPage", page)
//   }

//   // custom page
//   const customPage = () => {
//     switch (currentPage) {
//       case "dashboard":
//         return <Dashboard />
//       case "generate":
//         return <Generate />
//       case "sms":
//         return <SMS />
//       case "email":
//         return <Email />
//       default:
//         return <Dashboard />
//     }
//   }

//   return (
//     <div className="flex bg-[#f9fafd] min-h-screen">
//       {/* sidenav */}
//       <div className="flex-[0.2] bg-white p-8 shadow lg:block md:block hidden">
//         <Image
//           width={100}
//           height={100}
//           alt="logo"
//           src="/images/logo.png"
//           className="mx-auto ml-[-10px]"
//         />
//         <div className="mt-5 flex flex-col gap-3">
//           <div
//             className={`${
//               currentPage === "dashboard" ? "active" : "nav"
//             } flex items-center gap-3 rounded-lg cursor-pointer p-2`}
//             onClick={() => setPage("dashboard")}
//           >
//             <LuLayoutDashboard />
//             <p>Dashboard</p>
//           </div>
//           <div
//             className={`${
//               currentPage === "generate" ? "active" : "nav"
//             } flex items-center gap-3 rounded-lg  cursor-pointer p-2`}
//             onClick={() => setPage("generate")}
//           >
//             <HiOutlineDocumentDownload />
//             <p>Generate Data</p>
//           </div>
//           <div
//             className={`${
//               currentPage === "sms" ? "active" : "nav"
//             } flex items-center gap-3 rounded-lg  cursor-pointer p-2`}
//             onClick={() => setPage("sms")}
//           >
//             <MdOutlineSms />
//             <p>SMS Zone</p>
//           </div>
//           <div
//             className={`${
//               currentPage === "email" ? "active" : "nav"
//             } flex items-center gap-3 rounded-lg  cursor-pointer p-2`}
//             onClick={() => setPage("email")}
//           >
//             <HiOutlineMail />
//             <p>Email Zone</p>
//           </div>
//         </div>
//       </div>

//       {/* rightside content */}
//       <div className="md:flex-[0.8] lg:flex-[0.8] flex-1">
//         {/* top nav */}
//         <div className="h-[10vh] bg-white shadow w-full flex items-center justify-between px-5">
//           <div>
//             <RiMenu2Fill />
//           </div>
//           <div className="flex items-center gap-2">
//             <p>Veetickets</p>
//             <GoPerson />
//           </div>
//         </div>

//         {/* content area */}
//         <div className="p-6">{customPage()}</div>
//       </div>
//     </div>
//   )
// }

// export default Portal

"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { LuLayoutDashboard } from "react-icons/lu"
import { HiOutlineDocumentDownload, HiOutlineMail } from "react-icons/hi"
import { MdOutlineSms } from "react-icons/md"
import Dashboard from "@/app/(modules)/Dashboard"
import Generate from "@/app/(modules)/Generate"
import SMS from "@/app/(modules)/SMS"
import Email from "@/app/(modules)/Email"
import { RiMenu2Fill } from "react-icons/ri"
import { GoPerson } from "react-icons/go"

const Portal = () => {
  let myPage
  if (typeof sessionStorage !== "undefined") {
    myPage = sessionStorage.getItem("myPage")
  }

  const [currentPage, setCurrentPage] = useState(myPage || "dashboard")
  const [showSidebar, setShowSidebar] = useState(false)

  const setPage = (page) => {
    setCurrentPage(page)
    sessionStorage.setItem("myPage", page)
    setShowSidebar(false) // hide sidebar on mobile after selection
  }

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
    <div className="flex bg-[#f9fafd] min-h-screen relative">
      {/* Mobile sidebar backdrop */}
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-40 lg:hidden"
        />
      )}

      {/* Side Navigation */}
      <div
        className={`bg-white p-8 shadow transition-all duration-300
        fixed top-0 z-50 h-full w-3/4 sm:w-1/2
        ${showSidebar ? "left-0" : "-left-full"} 
        lg:static lg:left-0 lg:block lg:h-auto lg:w-auto lg:flex-[0.2]`}
      >
        <Image
          width={100}
          height={100}
          alt="logo"
          src="/images/logo.png"
          className="mx-auto ml-[-10px]"
        />
        <div className="mt-5 flex flex-col gap-3">
          {[
            { id: "dashboard", label: "Dashboard", icon: <LuLayoutDashboard /> },
            { id: "generate", label: "Generate Data", icon: <HiOutlineDocumentDownload /> },
            { id: "sms", label: "SMS Zone", icon: <MdOutlineSms /> },
            { id: "email", label: "Email Zone", icon: <HiOutlineMail /> },
          ].map((item) => (
            <div
              key={item.id}
              className={`${
                currentPage === item.id ? "active" : "nav"
              } flex items-center gap-3 rounded-lg cursor-pointer p-2`}
              onClick={() => setPage(item.id)}
            >
              {item.icon}
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content Area */}
      <div className="md:flex-[0.8] lg:flex-[0.8] flex-1">
        {/* Top Nav */}
        <div className="h-[10vh] bg-white shadow w-full flex items-center justify-between px-5">
          <RiMenu2Fill
            onClick={() => setShowSidebar(!showSidebar)}
            className="text-2xl cursor-pointer lg:hidden"
          />
          <div className="flex items-center gap-2">
            <p>Veetickets</p>
            <GoPerson />
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">{customPage()}</div>
      </div>
    </div>
  )
}

export default Portal
