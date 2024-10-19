import { useMainContext } from "../../hooks/customHooks";

const MembersTypes = () => {
  const { chatUnderline, setChatUnderline } = useMainContext();
  return (
    <section className="flex justify-between text-medium font-semibold border-b-[0.5px]">
      <div
        onClick={() => setChatUnderline("focused")}
        className={`${
          chatUnderline === "focused" &&
          "after:w-full after:h-[0.5px] after:bg-[#238766] after:absolute after:bottom-0 after:left-0 text-[#238766] transition duration-600"
        } w-full py-2 px-4 cursor-pointer text-center  transition duration-600 relative`}
      >
        <span>Focused</span>
      </div>
      <div
        onClick={() => setChatUnderline("other")}
        className={`${
          chatUnderline === "other" &&
          "after:w-full after:h-[0.5px] after:bg-[#238766] after:absolute after:bottom-0 after:left-0 text-[#238766] transition duration-300"
        } w-full py-2 px-4 cursor-pointer text-center relative`}
      >
        <span>Other</span>
      </div>
    </section>
  );
};

export default MembersTypes;
