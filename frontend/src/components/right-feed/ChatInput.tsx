import { IoSearchSharp } from "react-icons/io5";
import { LuListFilter } from "react-icons/lu";

const ChatInput = () => {
  return (
    <section className="p-2">
      <div className="items-center justify-center px-2 py-[0.5px] bg-[#EDF3F8] rounded-lg w-80 hidden lg:flex">
        <IoSearchSharp className="text-[#3B3D3E] w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 bg-[#EDF3F8] rounded-lg outline-none w-full"
        />
        <LuListFilter />
      </div>
    </section>
  );
};

export default ChatInput;
