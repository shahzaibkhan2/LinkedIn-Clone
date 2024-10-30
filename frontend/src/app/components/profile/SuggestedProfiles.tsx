import { SuggestedProfile } from "..";

const SuggestedProfiles = () => {
  return (
    <article className="bg-white border border-gray-300 rounded-lg mt-2">
      <div className="p-3 pt-6 flex flex-col gap-y-3">
        <p>More profiles for you</p>
        {[1, 2, 3, 4].map((item, i) => (
          <>
            <SuggestedProfile key={i} />
            <hr className="my-2" />
          </>
        ))}
      </div>
    </article>
  );
};

export default SuggestedProfiles;
