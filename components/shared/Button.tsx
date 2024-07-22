"use client";
import { useState } from "react";

import Modal from "./Modal";

export function OutlineButtonSmall({ name }: { name: string }) {
  return (
    <button className="text-white text-sm px-4 py-2 rounded-md border-2 border-[#694C9F] hover:bg-transparent">
      {name}
    </button>
  );
}

export function NoOutlineButtonSmall({ name }: { name: string }) {
  return (
    <button className="veridaq-gradient text-white text-sm px-4 py-2 rounded-md border-transparent hover:bg-transparent hover:veridaq-gradient hover:border-gray-800">
      {name}
    </button>
  );
}

export function OutlineButtonBig({ name }: { name: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button
        className="text-white text-sm px-4 py-4 rounded-md border-[#694C9F] border-2 hover:bg-transparent"
        onClick={handleOpenModal}
      >
        {name}
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export function NoOutlineButtonBig({ name }: { name: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button
        className="veridaq-gradient text-white text-sm px-4 py-4 rounded-md border-transparent hover:bg-transparent hover:veridaq-gradient hover:border-gray-800"
        onClick={handleOpenModal}
      >
        {name}
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export function NoOutlineButtonBig2({ name }: { name: string }) {
  return (
    <button className="veridaq-gradient text-white text-sm px-4 py-4 rounded-md border-transparent hover:bg-transparent hover:veridaq-gradient hover:border-gray-800">
      {name}
    </button>
  );
}

export function OutlineButtonBig2({ name }: { name: string }) {
  return (
    <button className="text-white text-sm px-4 py-4 rounded-md border-[#694C9F] border-2 hover:bg-transparent">
      {name}
    </button>
  );
}
