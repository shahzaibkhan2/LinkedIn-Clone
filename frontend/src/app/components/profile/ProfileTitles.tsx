import { LuShieldCheck } from "react-icons/lu";
import { assets } from "@/data/homeData";
import { BiPencil } from "react-icons/bi";
import Image from "next/image";

const ProfileTitles = () => {
  return (
    <article className="mt-20 flex items-center justify-between pl-10 pr-9">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3 w-[460px]">
          <h3 className="text-gray-800 font-semibold text-2xl">
            Shahzaib Khan
          </h3>
          <div className="flex gap-2 items-center border-[2px] border-dashed border-blue-600 text-blue-600 hover:text-blue-800 transition duration-200 font-semibold px-2 rounded-full cursor-pointer">
            <LuShieldCheck className="size-5" />
            <p>Verify now</p>
          </div>
        </div>
        <p className="text-md antialiased text-gray-700 w-[460px]">
          Full Stack MERN Developer | Frontend in React & Next.js | Redux
          Toolkit for State Management | JavaScript & TypeScript
        </p>
      </div>
      <div className="flex items-center gap-3 relative">
        <div className="absolute -top-14 -right-1 flex items-center justify-center size-10 hover:bg-gray-200 transition duration-300 rounded-full cursor-pointer">
          <BiPencil className="text-gray-800 size-7" />
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={assets.bgImg}
            alt="university"
            className="size-10 rounded-full"
          />
          <p className="font-semibold hover:text-blue-600 transition duration-300 hover:underline text-gray-700 cursor-pointer">
            University of California USA
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProfileTitles;
