import { assets } from "@/data/homeData";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="px-[7%] flex flex-col gap-3 mt-8 sticky top-24">
      <div className="text-para text-small flex flex-wrap gap-3 px-[10%]">
        <p className="hover:text-[#6ea4db] hover:underline cursor-pointer">
          About
        </p>
        <p className="hover:text-[#6ea4db] hover:underline cursor-pointer">
          Accessibility
        </p>
        <p className="hover:text-[#6ea4db] hover:underline cursor-pointer">
          Help Center
        </p>

        <div className="group flex gap-1 items-center hover:text-[#6ea4db] hover:underline cursor-pointer">
          <p className="text-small">Privacy & Terms</p>
          <IoMdArrowDropdown className="text-[#00000099] size-4 group-hover:text-[#6ea4db]" />
        </div>
        <p className="hover:text-[#6ea4db] hover:underline cursor-pointer">
          Add Choices
        </p>
        <p className="hover:text-[#6ea4db] hover:underline cursor-pointer">
          Advertising
        </p>
        <div className="group flex gap-1 items-center hover:text-[#6ea4db] hover:underline cursor-pointer">
          <p className="text-small">Business Services</p>
          <IoMdArrowDropdown className="text-[#00000099] size-4 cursor-pointer group-hover:text-[#6ea4db]" />
        </div>
        <p className="hover:text-[#6ea4db] hover:underline cursor-pointer">
          Get the LinkedIn App
        </p>
        <p className="hover:text-[#6ea4db] hover:underline cursor-pointer">
          More
        </p>
      </div>
      <div className="flex gap-2 items-center text-nowrap">
        <div className="flex items-center">
          <span className="font-bold text-[#0077b5]">Linked</span>
          <Image
            src={assets.linkedinLogo}
            alt="linkedin-logo"
            className="size-4"
          />
        </div>
        <p className="text-small ml-4 2xl:ml-0 text-wrap lg:text-nowrap">
          LinkedIn Corporation © 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
