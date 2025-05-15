import React from "react"
import dashdata from "../data/dashdata"
import DashCard from "../uibits/DashCard"

const Dashboard = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <div className="mt-6 grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-4 w-full">
        {dashdata.map((dash) => (
          <DashCard Icon={dash.icon} title={dash.title} value={dash.value} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
