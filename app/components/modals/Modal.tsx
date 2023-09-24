import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../Button";
import React from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  content?: React.ReactElement;
  footerContent?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
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
  secondaryAction,
  secondaryActionLabel,
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
            className="absolute left-8 top-[10%] cursor-pointer hover:text-gray-500 text-center"
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
        <div className="px-8 mt-4">{content}</div>

        {/* Footer */}

        <div className="flex flex-col gap-8 px-8 pt-8">
          <div
            className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
          >
            {secondaryAction && secondaryActionLabel && (
              <Button
                disabled={disabled}
                label={secondaryActionLabel}
                onClick={secondaryAction}
                outline
              />
            )}
            <Button
              disabled={disabled}
              label={actionLabel}
              onClick={onSubmit}
            />
          </div>
          {footerContent}
        </div>
      </div>
    </div>
  );
}
