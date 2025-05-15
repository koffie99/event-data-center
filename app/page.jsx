import Image from "next/image"
import Login from "./Components/Login"

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f9fafd]">
      <Login />
    </div>
  )
}
