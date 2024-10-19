import { FaLinkedin } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const LeftNav = () => {
  return (
    <section className="flex items-center justify-center gap-1 md:gap-5">
      <FaLinkedin className="text-[#0a66c2] size-10" />
      <div className="items-center justify-center px-2 py-1 bg-[#EDF3F8] rounded-lg w-80 hidden lg:flex lg:w-1/2 lg-2:w-full">
        <IoSearchSharp className="text-[#3B3D3E] w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 bg-[#EDF3F8] rounded-lg outline-none w-full"
        />
      </div>
      <div className="flex flex-col lg:hidden items-center justify-center">
        <IoSearchSharp className="text-[#3B3D3E] size-7" />
        <p className="hidden md-xl:block text-[#00000099] text-[12px]">
          Search
        </p>
      </div>
    </section>
  );
};

export default LeftNav;
