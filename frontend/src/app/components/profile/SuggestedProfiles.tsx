import { SuggestedProfile } from "..";

const SuggestedProfiles = ({ suggestTitle }: { suggestTitle: string }) => {
  return (
    <article className="bg-white border border-gray-300 rounded-lg mt-2">
      <div className="p-3 pt-6 flex flex-col gap-y-3">
        <p className="text-gray-700">{suggestTitle}</p>
        {[1, 2, 3, 4].map((item, i) => (
          <>
            <SuggestedProfile key={i} />
            <hr className="mt-2" />
            <button className="text-center text-gray-600 font-semibold">
              Show all
            </button>
          </>
        ))}
      </div>
    </article>
  );
};

export default SuggestedProfiles;
