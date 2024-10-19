import PostTitle from "./PostTitle";
import PostDesc from "./PostDesc";
import PostMedia from "./PostMedia";
import PostPerk from "./PostPerk";
import PostActivity from "./PostActivity";
import PostActionActivity from "./PostActionActivity";
import { IPostData } from "@/interfaces/IHomeContext";
import { postDataAssets } from "@/data/homeData";

const Post = () => {
  return postDataAssets.map((post: IPostData, index: number) => {
    return (
      <article key={index} className="bg-white mt-10 rounded-lg">
        <PostTitle
          profileImg={post.profileImg}
          title={post.title}
          followers={post.followers}
          postTime={post.postTime}
        />
        <PostDesc postDesc={post.postDesc} />
        <PostMedia postMedia={post.postMedia} />
        <PostPerk desc={post.desc} />
        <PostActivity
          likes={post.likes}
          comments={post.comments}
          reposts={post.reposts}
        />
        <hr />
        <PostActionActivity />
      </article>
    );
  });
};

export default Post;
