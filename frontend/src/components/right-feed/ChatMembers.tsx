import { assets } from "@/data/homeData";
import Image from "next/image";

const ChatMembers = () => {
  return (
    <section className="flex justify-between items-center p-2">
      <div className="flex justify-between gap-2 items-center">
        <div className="size-12 rounded-full after:size-3 after:bg-white after:border-4 after:border-[#238766] after:absolute after:right-0 after:bottom-0 after:rounded-full relative">
          <Image
            src={assets.me}
            className="size-full rounded-full"
            alt="profile-image"
          />
        </div>
        <div>
          <p className="text-e6-color text-medium">Shahzaib Khan</p>
          <p className="text-para text-small">
            <span>You: </span>Hello ! How are you
          </p>
        </div>
      </div>
      <p className="text-para text-small">
        <span>August</span> 4
      </p>
    </section>
  );
};

export default ChatMembers;
