"use client"
import { BaseFramerAnimation } from "@/components/shared/Animations"
import { NoOutlineButtonSmall } from "@/components/shared/Button"
import Modal from "@/components/shared/Modal"
import React, { useState } from "react"

export default function AiTools() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className="mx-[50px] mt-[150px] pt-[10]">
      <BaseFramerAnimation initialY={0}>
        <h2 className="text-2xl text-white mb-4 font-bold">Veridaq AI Tools</h2>
        <p className="text-white mb-6">
          Here are Veridaq.com AI-powered tools for verifiable talent profiling
          and competency-based hiring. These tools include:
          <ul className="list-disc pl-5">
            <li>Organisation Talent Sourcing and Rating (Talent SR)</li>
            <li>Individual Talent Placement (Talent P)</li>
          </ul>
        </p>

        <div className="mb-7 md:mb-10">
          <h4 className="text-lg text-white mb-2 font-bold">Organisation</h4>
          <p className="font-semibold">Talent SR (Talent Sourcing & Rating) </p>
          <p className="text-white mb-1">
            An AI-Powered Talent Sourcing and Rating Algorithm modelled on
            verifiable competence, hands-on/work experiences, accomplishments
            and recommendations data to help streamline screening and hiring
            process.
          </p>
          <div className="text-white my-2">
            <p className="mb-1">
              Need your next HIRE based on verifiable competence and work
              characteristics?
            </p>
            <span onClick={handleOpenModal}>
              <NoOutlineButtonSmall name="Sign Up Now" />
            </span>
          </div>
        </div>

        <div className="mb-7 md:mb-10">
          <h4 className="text-lg text-white mb-2 font-bold">Individual</h4>
          <p className="font-semibold">Talent P (Talent Placement) </p>
          <p className="text-white mb-1">
            An AI-Powered Talent/Job placement tool that align Job/Opportunity
            openings to the right talents
          </p>
          <div className="text-white my-2">
            <p className="mb-1">
              Need a Job Role based on your verifiable competence and work
              characteristics?
            </p>
            <span onClick={handleOpenModal}>
              <NoOutlineButtonSmall name="Sign Up Now" />
            </span>
          </div>
        </div>
      </BaseFramerAnimation>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
