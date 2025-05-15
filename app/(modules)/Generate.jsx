"use client"
import { Modal, Select, Table } from "antd"
import Image from "next/image"
import React, { useState } from "react"
import { FaRegFileAlt } from "react-icons/fa"
import { MdOutlineFileDownload } from "react-icons/md"

const Generate = () => {
  const [openGenerateModal, setOpenGenerateModal] = React.useState(false)
  const [openGeneratedFileModal, setOpenGeneratedFileModal] =
    React.useState(false)
  const [generating, setGenerating] = useState(false)

  // handle generate
  const handleGenerate = () => {
    setGenerating(true)
    setInterval(() => {
      setOpenGenerateModal(false)
      setOpenGeneratedFileModal(true)
    }, 3000)
  }

  return (
    <div className="w-full min-h-screen">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">Generate Data</h2>
        <button
          className="flex items-center gap-2 bg-[#550f4d] p-2 text-sm rounded-lg px-5 cursor-pointer text-white"
          onClick={() => setOpenGenerateModal(true)}
        >
          <FaRegFileAlt />
          <p>Generate</p>
        </button>{" "}
      </div>
      <div className="p-3 bg-white rounded-lg shadow w-full mt-4">
        <Table />
      </div>

      <Modal
        open={openGenerateModal}
        onCancel={() => setOpenGenerateModal(false)}
        footer={false}
        title="Generate Data"
        // width={800}
      >
        <div className="grid grid-cols-2 gap-4">
          {/* <select name="" id="" aria-placeholder="Select Organizer"></select> */}
          <Select placeholder="Select Organizer">
            <Option value="1">Akwaaba UK</Option>
            <Option value="1">Bhim Nation</Option>
          </Select>
          <Select placeholder="Select Event">
            <Option value="1">Akwaaba UK</Option>
            <Option value="1">Bhim Nation</Option>
          </Select>
          <Select placeholder="Select Duration">
            <Option value="1">Akwaaba UK</Option>
            <Option value="1">Bhim Nation</Option>
          </Select>
          <Select placeholder="Select Field Type">
            <Option value="1">Akwaaba UK</Option>
            <Option value="1">Bhim Nation</Option>
          </Select>
        </div>

        {/* footer */}
        <div className="mt-5 flex justify-between">
          <div></div>
          <div></div>
          <div>
            <button
              className="bg-[#550F4D] text-white p-2 rounded-lg px-4 cursor-pointer"
              onClick={() => handleGenerate()}
            >
              {generating ? (
                <div className="flex items-center gap-2 text-sm">
                  <p className="text-sm">Generating</p>
                  <Image
                    height={20}
                    width={20}
                    alt="loading anim"
                    src="/gifs/white-spinner.gif"
                  />
                </div>
              ) : (
                <p className="text-sm">Generate</p>
              )}
            </button>
          </div>
        </div>
      </Modal>

      {/* file modal */}
      <Modal
        title="Generated Data"
        open={openGeneratedFileModal}
        footer={false}
      >
        {/* footer */}
        <div className="mt-5 flex justify-between">
          <div></div>
          <div></div>
          <div>
            <button
              className="bg-[#550F4D] text-white p-2 rounded-lg px-4 cursor-pointer"
              // onClick={() => handleGenerate()}
            >
              <div className="flex items-center gap-2 text-sm">
                <p className="text-sm">Download file</p>
                <MdOutlineFileDownload />
              </div>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Generate
