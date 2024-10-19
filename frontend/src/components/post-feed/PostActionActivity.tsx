import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { BiRepost } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";

const PostActionActivity = () => {
  return (
    <section className="flex justify-between items-center py-2 px-10">
      <div className="flex gap-1 items-center text-icon-black px-5 py-2 hover:bg-gray-200 transition duration-300 rounded-md cursor-pointer">
        <AiOutlineLike className="size-7 -mt-2" />
        <p className="hidden lg-3:block">Like</p>
      </div>
      <div className="flex gap-1 items-center text-icon-black px-5 py-2 hover:bg-gray-200 transition duration-300 rounded-md cursor-pointer">
        <MdOutlineComment className="size-6" />
        <p className="hidden lg-3:block">Comments</p>
      </div>
      <div className="flex gap-1 items-center text-icon-black px-5 py-2 hover:bg-gray-200 transition duration-300 rounded-md cursor-pointer">
        <BiRepost className="size-6" />
        <p className="hidden lg-3:block">Repost</p>
      </div>
      <div className="flex gap-1 items-center text-icon-black px-5 py-2 hover:bg-gray-200 transition duration-300 rounded-md cursor-pointer">
        <RiSendPlaneFill className="size-6" />
        <p className="hidden lg-3:block">Send</p>
      </div>
    </section>
  );
};

export default PostActionActivity;
