interface MenuItemProps {
  label: string;
  onClick: () => void;
  isBold?: boolean;
}

export function MenuItem({ onClick, label, isBold }: MenuItemProps) {
  return (
    <div
      className={`px-4 text-sm py-2 hover:bg-gray-50 cursor-pointer ${
        isBold ? "font-bold" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
