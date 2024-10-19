import { TPostPerkProps } from "@/types/TPost";

const PostPerk = ({ desc }: TPostPerkProps) => {
  return (
    <section className="p-2 bg-[#edf3f8] flex flex-col gap-3 mb-2">
      <h2 className="text-e6-color text-medium font-semibold">{desc}</h2>
      <p className="text-para text-small">
        <span>33</span> submissions
      </p>
    </section>
  );
};

export default PostPerk;
