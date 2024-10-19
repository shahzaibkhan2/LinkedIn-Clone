import { IoMdApps } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

const RightNav = () => {
  return (
    <section className="flex gap-5 border-[rgb(102,102,102,0.3)] border-l-[0.5px]">
      <div className="hidden sm:block ml-4">
        <IoMdApps className="text-[#666666] w-7 h-7" />
        <div className="flex justify-center items-center">
          <p className="hidden md-xl:block text-[#00000099] text-[12px] text-nowrap">
            For Business
          </p>
          <IoMdArrowDropdown className="text-[#00000099] w-6 h-6" />
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-center flex-col">
        <div className="hidden sm:block rounded-lg w-7 h-7 bg-[#F8C77E]"></div>
        <p className="text-[#00000099] text-[12px] sm:text-nowrap">
          Get Premium for PKR0
        </p>
      </div>
      <HiDotsHorizontal className="sm:hidden size-7 text-[#00000099] ml-2" />
    </section>
  );
};

export default RightNav;
