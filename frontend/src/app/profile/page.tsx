import Image from "next/image";
import ProfilePicture from "../components/profile/ProfilePicture";
import { LuShieldCheck } from "react-icons/lu";
import { assets } from "@/data/homeData";
import { BiPencil } from "react-icons/bi";

const Profile = () => {
  return (
    <main className="grid grid-cols-12 w-ful mx-auto px-[5%] lg:px-[10%] gap-6 mt-20">
      <section className="col-span-9 rounded-lg bg-white border border-gray-300">
        <ProfilePicture />
        <article className="mt-20 flex items-center justify-between pl-10 pr-9">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 w-[460px]">
              <h3 className="text-gray-800 font-semibold text-2xl">
                Shahzaib Khan
              </h3>
              <div className="flex gap-2 items-center border-[2px] border-dashed border-blue-600 font-semibold px-2 rounded-full">
                <LuShieldCheck className="size-5 text-blue-600" />
                <p className="text-blue-600">Verify now</p>
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
      </section>

      <section className="col-span-3 rounded-lg min-h-screen bg-blue-200">
        <div className="p-3 space-y-3">
          <div>
            <h2>Profile</h2>
            <p>Text</p>
          </div>
          <hr />
          <div>
            <h2>Profile</h2>
            <p>Text</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
