import prof from "@/assets/images/p2.jpg";
import Follow from "@/components/buttons/Follow";
import Image from "next/image";

const SuggestedProfile = () => {
  return (
    <div className="flex items-start gap-x-3">
      <Image
        src={prof}
        alt="profile-picture"
        className="size-12 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="text-gray-700 font-semibold">Shahzaib Khan</h3>
        <p className="line-clamp-2 text-gray-600 text-sm">
          Full Stack MERN Developer | Frontend in React & Next.js | Redux
          Toolkit for State Management | JavaScript & TypeScript
        </p>
        <Follow />
      </div>
    </div>
  );
};

export default SuggestedProfile;
