import { TPostDescProps } from "@/types/TPost";

const PostDesc = ({ postDesc }: TPostDescProps) => {
  return (
    <section className="px-4 py-2 text-e6-color text-medium">
      <p className="text-clip ">{postDesc}</p>
    </section>
  );
};

export default PostDesc;
