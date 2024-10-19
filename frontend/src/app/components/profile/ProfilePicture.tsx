import { assets } from "@/data/homeData";
import Image from "next/image";
import { ImPencil } from "react-icons/im";

const ProfilePicture = () => {
  return (
    <div className="flex relative">
      <div className="size-40 absolute top-32 left-10 rounded-full bg-white flex items-center justify-center">
        <Image
          src={assets.p2}
          alt="avatar"
          className="size-[95%] rounded-full object-cover"
        />
      </div>
      <div className="absolute top-5 right-5 size-8 rounded-full bg-white flex items-center justify-center">
        <ImPencil className="text-blue-700 size-4" />
      </div>
      <Image
        src={assets.bgImg}
        alt="background-image"
        className="w-full h-56 object-cover rounded-t-lg"
      />
    </div>
  );
};

export default ProfilePicture;
