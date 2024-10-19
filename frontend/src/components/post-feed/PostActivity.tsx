import { AiFillLike } from "react-icons/ai";
import { IoHeartSharp } from "react-icons/io5";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { TPostActivityProps } from "@/types/TPost";

const PostActivity = ({ likes, comments, reposts }: TPostActivityProps) => {
  return (
    <section className="px-4 py-1 flex justify-between pb-4">
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="size-4 bg-[#368ce5]  rounded-full flex justify-center items-center">
            <AiFillLike className="text-white size-3" />
          </div>
          <div className="size-4 bg-[#e17856] rounded-full flex justify-center items-center transform -translate-x-1">
            <IoHeartSharp className="text-white size-3" />
          </div>
          <div className="size-4 bg-[#4ec2d5] rounded-full flex justify-center items-center transform -translate-x-2">
            <BsEmojiLaughingFill className="text-white size-3" />
          </div>
        </div>
        <p className="text-para text-small">{likes}</p>
      </div>
      <div className="flex gap-3 text-para text-small">
        <p>
          <span>{comments}</span> comment •
        </p>
        <p>
          <span>{reposts}</span> reposts
        </p>
      </div>
    </section>
  );
};

export default PostActivity;
