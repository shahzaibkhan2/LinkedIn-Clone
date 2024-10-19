import { IoMdAdd } from "react-icons/io";
import { assets } from "../../assets/assets";

const Company = () => {
  return (
    <article className="px-[5%]">
      <div className="px-[1%] flex gap-2 mt-2 mb-4">
        <img src={assets.reactLogo} alt="company-logo" className="size-14" />
        <div className="flex flex-col">
          <h3>NovaTech Solutions</h3>
          <p className="w-full text-small text-[#00000099]">
            Company • IT Services and IT Consulting
          </p>
          <button className="flex gap-1 items-center border border-[#000000bf] rounded-full px-3 py-[2.5px] w-max justify-between mt-2">
            <IoMdAdd className="text-icon-black size-5" />
            <span className="font-semibold text-icon-black">Follow</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Company;
