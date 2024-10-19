import { TPosttitleProps } from "@/types/TPost";
import Image from "next/image";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineClear } from "react-icons/md";

const PostTitle = ({
  title,
  followers,
  postTime,
  profileImg,
}: TPosttitleProps) => {
  return (
    <section className="flex justify-between p-4">
      <div className="flex gap-2">
        <Image
          src={profileImg}
          alt="profile-image"
          className="size-11 rounded-full"
        />
        <div className="flex flex-col">
          <h2 className="text-[#000000e6] font-semibold">{title}</h2>
          <p className="text-para text-small">{followers} followers</p>
          <div className="flex gap-2 items-center">
            <p className="text-para text-small">{postTime} •</p>
            <FaGlobeAmericas className="text-[#00000099] size-4" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 text-para">
        <HiDotsHorizontal className="size-5" />
        <MdOutlineClear className="size-5" />
      </div>
    </section>
  );
};

export default PostTitle;
