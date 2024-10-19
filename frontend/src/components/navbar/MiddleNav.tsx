"use client";
import { IoHome } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { BiSolidBell } from "react-icons/bi";

import { IoMdArrowDropdown } from "react-icons/io";
import { useHomeContext } from "@/hooks/useHomeContext";
import { assets } from "@/data/homeData";
import Image from "next/image";

const MiddleNav = () => {
  const { underline, setUnderline } = useHomeContext();
  return (
    <section className="flex gap-5 sm:gap-8">
      <div
        onClick={() => setUnderline("home")}
        className={`flex flex-col pl-1 items-center justify-center ${
          underline === "home" && "underline underline-offset-7"
        } cursor-pointer`}
      >
        <IoHome className="text-[#666666] w-7 h-7" />
        <p className="hidden md-xl:block text-[#00000099] text-[12px]">Home</p>
      </div>
      <div
        onClick={() => setUnderline("networks")}
        className={`flex flex-col items-center justify-center h-full ${
          underline === "networks" && "underline underline-offset-7"
        } cursor-pointer`}
      >
        <HiUsers className="text-[#666666] w-7 h-7" />
        <p className="hidden md-xl:block text-[#00000099] text-[12px] text-nowrap">
          My Networks
        </p>
      </div>
      <div
        onClick={() => setUnderline("jobs")}
        className={`flex flex-col items-center justify-center ${
          underline === "jobs" && "underline underline-offset-7"
        } cursor-pointer`}
      >
        <MdWork className="text-[#666666] w-7 h-7" />
        <p className="hidden md-xl:block text-[#00000099] text-[12px]">Jobs</p>
      </div>
      <div
        onClick={() => setUnderline("messages")}
        className={`hidden very-sm:flex flex-col items-center justify-center ${
          underline === "messages" && "underline underline-offset-7"
        } cursor-pointer`}
      >
        <BiSolidMessageRoundedDots className="text-[#666666] w-7 h-7" />
        <p className="hidden md-xl:block text-[#00000099] text-[12px]">
          Messages
        </p>
      </div>
      <div
        onClick={() => setUnderline("notifications")}
        className={`hidden very-sm:flex flex-col items-center justify-center ${
          underline === "notifications" && "underline underline-offset-7"
        } cursor-pointer`}
      >
        <BiSolidBell className="text-[#666666] w-7 h-7" />
        <p className="hidden md-xl:block text-[#00000099] text-[12px]">
          Notifications
        </p>
      </div>
      <div className="hidden sm:flex flex-col items-center justify-center text-[#00000099] text-[12px]">
        <Image src={assets.me} alt="profile-picture" className="w-7" />
        <div className="flex justify-center items-center">
          <p className="hidden md-xl:block text-[#00000099] text-[12px]">Me</p>
          <IoMdArrowDropdown className="text-[#00000099] w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default MiddleNav;
