import { BiSearch } from "react-icons/bi";
import { MdFilterAlt } from "react-icons/md";

export function Search() {
  return (
    <div className="w-full md:w-fit">
      <div className="md:flex hidden flex-row gap-1 border-2 rounded-full items-center py-2">
        <div className="border-gray-300 border-r px-4 text-sm font-bold cursor-pointer">
          Anywhere
        </div>
        <div className="border-gray-300 border-r px-4 text-sm font-bold cursor-pointer">
          Any week
        </div>
        <div className="pl-4 pr-1 text-sm cursor-pointer flex flex-row gap-3 items-center text-gray-500">
          Add guests
          <div className="bg-rose-500 text-md rounded-full text-white p-2 font-bold">
            <BiSearch />
          </div>
        </div>
      </div>
      <div className="md:hidden w-full">
        <div className="flex flex-row border-2 rounded-full items-center justify-between py-2 px-2">
          <div className="flex flex-row gap-1 items-center">
            <div className="text-xl rounded-full p-2 font-bold">
              <BiSearch />
            </div>
            <div className="px-4 text-sm flex flex-col justfy-center">
              <p className="font-bold">Anywhere</p>
              <div className="flex gap-1">
                <span className="text-gray-500">Any week</span>
                <span>.</span>
                <span className="text-gray-500">Add guests</span>
              </div>
            </div>
          </div>
          <div className="text-2xl">
            <MdFilterAlt />
          </div>
        </div>
      </div>
    </div>
  );
}
