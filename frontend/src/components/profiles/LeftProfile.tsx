import Image from "next/image";
import ProfileViews from "./ProfileViews";
import { assets } from "@/data/homeData";

const LeftProfile = () => {
  return (
    <>
      <article className="flex flex-col w-full bg-white relative rounded-lg">
        <div>
          <Image
            src={assets.bgImg}
            alt="background-image"
            className="w-full h-16 object-cover overflow-hidden rounded-t-lg"
          />
          <Image
            src={assets.p2}
            alt="profile-picture"
            className="size-20 absolute top-[8%] right-[30%] xl:right-[35%] object-cover overflow-hidden rounded-full ring-1 ring-white"
          />
        </div>
        <div className="flex flex-col mt-14 text-center gap-2">
          <h2 className="w-full font-semibold text-[#000000e6]">
            Shahzaib Khan
          </h2>
          <p className="w-full text-small text-para">
            Full Stack Developer (MERN) | NEXT.js | TypeScript | JavaScript |
            Logic Building | Programming | Agile Development | Redux Toolkit
          </p>
        </div>
        <hr className="w-full h-[0.5px] bg-black my-5" />
      </article>
      <ProfileViews />
    </>
  );
};

export default LeftProfile;
