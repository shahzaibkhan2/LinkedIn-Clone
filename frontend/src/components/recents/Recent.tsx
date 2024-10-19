import { HiUserGroup } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

const Recent = () => {
  return (
    <article className="mt-3 px-[5%] bg-white rounded-lg">
      <p className="text-small text-[#000000e6]">Recent</p>
      <section className="flex flex-col gap-2 mt-4 text-para">
        <div className="flex items-center gap-2">
          <HiUserGroup className="size-5" />
          <p className="text-small">Data Science Community </p>
        </div>
        <div className="flex items-center gap-2">
          <HiUserGroup className="size-5" />
          <p className="text-small">Data Science Community </p>
        </div>
        <div className="flex items-center gap-2">
          <HiUserGroup className="size-5" />
          <p className="text-small">Data Science Community </p>
        </div>
        <div className="flex items-center gap-2">
          <HiUserGroup className="size-5" />
          <p className="text-small">Data Science Community </p>
        </div>
        <div className="flex items-center gap-2">
          <HiUserGroup className="size-5" />
          <p className="text-small">Data Science Community </p>
        </div>
      </section>
      <section className="flex flex-col gap-3 mt-5">
        <div className="flex justify-between">
          <p className="text-[#6ea4db] text-small font-semibold">Groups</p>
          <IoIosArrowDown className="size-5 text-para" />
        </div>
        <div className="flex justify-between">
          <p className="text-[#6ea4db] text-small font-semibold">Events</p>
          <IoMdAdd className="size-5 text-para" />
        </div>
        <p className="text-[#6ea4db] text-small font-semibold">
          Followed Hashtags
        </p>
        <hr />
        <p className="text-center pb-3 text-[#000000bf] font-semibold">
          Discover more
        </p>
      </section>
    </article>
  );
};

export default Recent;
