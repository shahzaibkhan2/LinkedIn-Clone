import { IoMdAdd } from "react-icons/io";

const Follow = () => {
  return (
    <button className="flex gap-1 items-center border border-[#000000bf] rounded-full px-3 py-[2.5px] w-max justify-between mt-2 hover:ring-1 hover:ring-black hover:bg-gray-100 transition duration-200">
      <IoMdAdd className="text-icon-black size-5" />
      <span className="font-semibold text-icon-black">Follow</span>
    </button>
  );
};

export default Follow;
