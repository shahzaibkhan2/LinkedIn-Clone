import { assets } from "../../assets/assets";
import { BsImage } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { PiArticleMedium } from "react-icons/pi";

const Status = () => {
  return (
    <article className="px-[3%] py-[2%] flex flex-col bg-white rounded-lg gap-2 w-full">
      <div className="flex gap-2 items-center">
        <img
          src={assets.me}
          alt="profile-image"
          className="size-12 rounded-full"
        />
        <p className="text-icon-black border border-gray-400 px-6 py-3 rounded-full w-full hover:bg-gray-100 transition duration-300 cursor-pointer">
          Start a post, try writing with AI
        </p>
      </div>
      <div className="flex justify-between px-[3%] w-full flex-wrap lg-2:flex-nowrap">
        <div className="flex gap-2 items-center hover:bg-gray-100 transition duration-300 cursor-pointer px-4 py-4 rounded-lg">
          <BsImage className="size-5 text-[#4a90e1]" />
          <p className="text-[14px] text-[#000000e6] font-semibold text-nowrap">
            Media
          </p>
        </div>
        <div className="flex gap-2 items-center hover:bg-gray-100 transition duration-300 cursor-pointer px-4 py-4 rounded-lg">
          <MdOutlineMessage className="size-6 text-[#c88023]" />
          <p className="text-[14px] text-[#000000e6] font-semibold text-nowrap">
            Contribute expertise
          </p>
        </div>
        <div className="flex gap-2 items-center hover:bg-gray-100 transition duration-300 cursor-pointer px-4 py-4 rounded-lg">
          <PiArticleMedium className="size-6 text-[#e26d4f]" />
          <p className="text-[14px] text-[#000000e6] font-semibold text-nowrap">
            Write article
          </p>
        </div>
      </div>
    </article>
  );
};

export default Status;
