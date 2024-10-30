import { assets } from "@/data/homeData";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import Follow from "../buttons/Follow";

const Company = () => {
  return (
    <article className="px-[5%]">
      <div className="px-[1%] flex gap-2 mt-2 mb-4">
        <Image src={assets.reactLogo} alt="company-logo" className="size-14" />
        <div className="flex flex-col">
          <h3>NovaTech Solutions</h3>
          <p className="w-full text-small text-[#00000099]">
            Company • IT Services and IT Consulting
          </p>
          <Follow />
        </div>
      </div>
    </article>
  );
};

export default Company;
