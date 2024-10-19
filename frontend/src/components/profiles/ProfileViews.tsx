import { IoBookmarkSharp } from "react-icons/io5";

const ProfileViews = () => {
  return (
    <article className="flex flex-col gap-2 px-3 bg-white rounded-b-lg">
      <p className="flex text-small text-para justify-between">
        Profile viewers <span className="text-[#5394d4]">40</span>
      </p>
      <p className="flex text-small text-para justify-between">
        Post impressions <span className="text-[#5394d4]">395</span>
      </p>
      <hr className="w-full h-[0.5px] bg-black my-3" />
      <p className="flex text-small text-para justify-between">
        Unlock Premium tools & insights
      </p>
      <div className="flex gap-2 items-center">
        <div className="rounded-sm size-4 bg-[#F8C77E]"></div>
        <p className="text-[#00000099] text-[12px] sm:text-nowrap font-bold">
          Try for PKR0
        </p>
      </div>
      <hr className="w-full h-[0.5px] bg-black mt-3" />
      <div className="flex gap-2 items-center my-3">
        <IoBookmarkSharp className="size-5 text-para" />
        <p className="text-[#5394d4] text-small">Saved items</p>
      </div>
    </article>
  );
};

export default ProfileViews;
