import { ImPencil } from "react-icons/im";
import { IoIosClose } from "react-icons/io";

const ProfileWork = () => {
  return (
    <article className="flex justify-between px-10 mt-8 text-sm text-gray-800 w-full">
      <section className="flex flex-col bg-[#dde7f1] p-2 rounded-lg w-[49%]">
        <div className="flex items-center justify-between">
          <h6 className="font-semibold">Open to work</h6>
          <ImPencil className="size-4 transition duration-300" />
        </div>
        <p>Frontend Developer and Full-stack Developer roles</p>
        <p className="text-blue-600 font-semibold">Show details</p>
      </section>
      <section className="flex flex-col border border-gray-300 p-2 rounded-lg w-[49%]">
        <div className="flex items-center justify-between">
          <p className="w-80">
            <span className="font-semibold">Share that you’re hiring</span> and
            attract qualified candidates
          </p>
          <IoIosClose className="size-8 transition duration-300 mb-6" />
        </div>
        <p className="text-blue-600 font-semibold">Get started</p>
      </section>
    </article>
  );
};

export default ProfileWork;
