"use client";

import { Category } from "../../types";

type CategoryInputProps = Omit<Category, "description"> & {
  selected?: boolean;
  onClick: () => void;
};

export function CategoryInput({
  icon: Icon,
  label,
  selected,
  onClick,
}: CategoryInputProps) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? "border-black" : "border-neutral-200"}
      `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
}
