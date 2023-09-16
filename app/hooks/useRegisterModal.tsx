"use client";

import React from "react";
import { create } from "zustand";

interface RegiserModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModal = create<RegiserModalStore>((set) => {
  return {
    // TODO: change this to be false by default
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  };
});

export { useRegisterModal };
