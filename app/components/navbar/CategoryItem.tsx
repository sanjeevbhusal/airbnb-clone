import { useRouter, useSearchParams } from "next/navigation";
import { Category } from "./types";

interface CategoryItemProps {
  category: Category;
  selected?: boolean;
}

export function CategoryItem({
  category: { label, icon: Icon },
  selected,
}: CategoryItemProps) {
  const params = useSearchParams();
  const router = useRouter();
  const handleClick = () => {
    let url = "/?";
    let shouldAddCategory = true;

    params.forEach((value, key) => {
      if (key === "category") {
        if (value === label) {
          shouldAddCategory = false;
        }
        return;
      }
      url += `${key}=${value}&`;
    });

    if (shouldAddCategory) {
      url += `category=${label}`;
    }

    router.push(url);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? "border-b-2 border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <Icon size={26} />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}
