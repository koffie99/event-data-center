import React from "react"

const DashCard = ({ Icon, value, title }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow flex gap-3">
      <div className="bg-[#550f4d] text-white p-4 rounded-lg">
        {Icon && <Icon className="text-2xl" />}
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">{value}</h2>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default DashCard
