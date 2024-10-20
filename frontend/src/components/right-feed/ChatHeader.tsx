"use client";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineOpenInNew } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useHomeContext } from "@/hooks/useHomeContext";
import { assets } from "@/data/homeData";
import Image from "next/image";

const ChatHeader = () => {
  const { setMiniChat, miniChat } = useHomeContext();
  return (
    <section className="flex justify-between items-center p-2">
      <div className="flex gap-1 items-center">
        <Image
          src={assets.p2}
          className="size-8 object-cover rounded-full"
          alt="profile-image"
        />
        <p className="text-e6-color text-medium font-semibold">Messages</p>
      </div>
      <div className="flex gap-2">
        <HiDotsHorizontal className="size-5 text-icon-black cursor-pointer" />
        <MdOutlineOpenInNew className="size-4 text-icon-black cursor-pointer" />
        {miniChat ? (
          <IoIosArrowUp
            onClick={() => setMiniChat((prev) => !prev)}
            className="size-6 text-icon-black cursor-pointer"
          />
        ) : (
          <IoIosArrowDown
            onClick={() => setMiniChat((prev) => !prev)}
            className="size-6 text-icon-black cursor-pointer"
          />
        )}
      </div>
    </section>
  );
};

export default ChatHeader;
