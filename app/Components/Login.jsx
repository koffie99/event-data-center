"use client"
import Image from "next/image"
import React from "react"

const Login = () => {
  // handle login
  const handleLogin = (e) => {
    e.preventDefault()

    location.href = "/portal"
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl flex-col w-[450px]">
      <div className="flex flex-col items-center mb-6">
        <Image width={150} height={150} alt="logo" src="/images/logo.png" />
        <h1 className="text-3xl font-bold">Events Data Center</h1>
        <h2>Login to continue</h2>
      </div>
      <form onSubmit={handleLogin} className="flex flex-col mt-5 gap-3">
        <input
          type="email"
          placeholder="Email"
          className="ring-1 ring-[#ccc] p-2 rounded outline-[#550F4D]"
        />
        <input
          type="password"
          placeholder="Password"
          className="ring-1 ring-[#ccc] p-2 rounded outline-[#550F4D]"
        />
        <button
          type="submit"
          className="bg-[#550F4D] hover:opacity-99 text-white p-2 rounded-lg mt-3 cursor-pointer"
        >
          Login Now
        </button>
      </form>
    </div>
  )
}

export default Login
