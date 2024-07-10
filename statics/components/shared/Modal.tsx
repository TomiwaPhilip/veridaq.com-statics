"use client"

import React, { useState, ReactNode, useEffect, useRef } from "react"
import { NoOutlineButtonBig, NoOutlineButtonBig2 } from "./Button"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-auto backdrop-filter backdrop-blur-lg flex justify-center items-center">
      <div
        ref={modalRef}
        className="bg-[#423944] rounded-lg p-8 text-white relative w-full max-w-md"
      >
        <div className="flex flex-col items-center justify-center gap-10">
          <a href="https://individual.veridaq.com" target="_blank">
            <NoOutlineButtonBig2 name="Join as an Individual" />
          </a>
          <a href="https://organization.veridaq.com" target="_blank">
            <NoOutlineButtonBig2 name="Join as an Organization" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Modal
