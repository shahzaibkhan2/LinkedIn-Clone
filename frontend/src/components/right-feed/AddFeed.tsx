import { HiOutlineArrowRight } from "react-icons/hi";
import { BsQuestionSquareFill } from "react-icons/bs";
import { Chat, Company } from "..";

const AddFeed = () => {
  return (
    <section className="bg-white rounded-lg relative">
      <div className="flex justify-between items-center px-[5%] pt-3 pb-3">
        <h2>Add to your feed</h2>
        <BsQuestionSquareFill className="size-3 text-icon-black" />
      </div>
      <Company />
      <Company />
      <Company />
      <div className="mt-3 flex gap-2 items-center text-[14px] text-icon-black font-semibold px-[6%] py-2 pb-4">
        <p>View all recommendations </p>
        <HiOutlineArrowRight className="size-4" />
      </div>
      <Chat />
    </section>
  );
};

export default AddFeed;
