import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../Button";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  disabled: boolean;
  actionLabel: string;
  content: React.ReactNode;
  onSubmit: () => void;
  footerContent: React.ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  disabled,
  actionLabel,
  content,
  onSubmit,
  footerContent,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-neutral-800/70 flex items-center justify-center">
      <div
        className="bg-white rounded-md md:w-4/6
          lg:w-3/6
          xl:w-2/5 py-6"
      >
        {/* Header */}
        <div className="relative pb-4 border-b border-gray-300 text-center font-semibold">
          {title}
          <div
            className="absolute left-4 top-[10%] cursor-pointer hover:text-gray-500 text-center"
            onClick={() => {
              if (disabled) {
                return;
              }
              onClose();
            }}
          >
            <AiOutlineClose />
          </div>
        </div>
        {/* Body*/}
        <div className="px-4 mt-4">
          {content}

          <div className="mt-4">
            <Button
              label={actionLabel}
              onClick={onSubmit}
              disabled={disabled}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 mt-8">{footerContent}</div>
      </div>
    </div>
  );
}
