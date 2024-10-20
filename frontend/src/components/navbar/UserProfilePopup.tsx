import { assets } from "@/data/homeData";
import Image from "next/image";
import Link from "next/link";

const UserProfilePopup = ({
  showUserPopup,
  setShowUserPopup,
}: TUserProfilePopup) => {
  return (
    <nav
      className={`${
        showUserPopup ? "block" : "hidden"
      } absolute -right-20 transition duration-300 w-72 mt-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg py-2 z-10 p-2`}
    >
      <div className="flex gap-4 mb-3">
        <div className="size-14">
          <Image
            src={assets.p2}
            alt="tania andrew"
            className="relative inline-block object-cover object-center size-full rounded-full"
          />
        </div>
        <div className="flex flex-col w-52">
          <h6 className="mb-2 text-lg antialiased text-blue-gray-900 font-semibold">
            Shahzaib Khan
          </h6>
          <p className="text-md antialiased text-gray-700">
            Full Stack MERN Developer | Frontend in React & Next.js | Redux
            Toolkit for State Management | JavaScript & TypeScript
          </p>
        </div>
      </div>
      <Link
        onClick={() => setShowUserPopup(false)}
        href="/profile"
        className="flex items-center justify-center w-full px-2 bg-transparent border border-blue-700 text-blue-700 hover:ring-1 ring-blue-800 transition duration-200 rounded-full"
      >
        View Profile
      </Link>
      <hr className="my-3" />
      <section>
        <h6 className="font-semibold text-md my-2">Account</h6>
        <div className="flex items-center gap-1">
          <div className="hidden sm:block rounded-sm size-3 bg-[#F8C77E]"></div>
          <p className="hover:text-blue-600 transition duration-200 cursor-pointer">
            Try 1 month of Premium for PKR0
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <Link
            href="#"
            className="hover:underline text-gray-600 transition duration-300"
          >
            Settings and Privacy
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-600 transition duration-300"
          >
            Help
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-600 transition duration-300"
          >
            Language
          </Link>
        </div>
      </section>
      <hr className="my-3" />
      <section>
        <h6 className="font-semibold text-md my-2">Manage</h6>
        <div className="flex flex-col gap-3">
          <Link
            href="#"
            className="hover:underline text-gray-600 transition duration-300"
          >
            Posts & Activity
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-600 transition duration-300"
          >
            Job Posting Account
          </Link>
        </div>
      </section>
      <hr className="my-3" />
      <button className="hover:underline text-gray-600 transition duration-300">
        Sign out
      </button>
    </nav>
  );
};

export default UserProfilePopup;
