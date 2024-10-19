import { assets } from "../../assets/assets";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineOpenInNew } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useMainContext } from "../../hooks/customHooks";

const ChatHeader = () => {
  const { setMiniChat, miniChat } = useMainContext();
  return (
    <section className="flex justify-between items-center p-2">
      <div className="flex gap-1 items-center">
        <img src={assets.me} className="size-8" alt="profile-image" />
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
