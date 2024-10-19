import me from "@/assets/images/shahzaib.jpg";
import bgImg from "@/assets/images/background-img.webp";
import reactLogo from "@/assets/images/react.png";
import linkedinLogo from "@/assets/images/connection.png";
import p1 from "@/assets/images/p1.jpg";
import p2 from "@/assets/images/p2.jpg";
import p3 from "@/assets/images/p3.jpg";

import pr1 from "@/assets/images/pr1.jpg";
import pr2 from "@/assets/images/pr2.jpg";
import pr3 from "@/assets/images/pr3.jpg";
import { IPostData } from "@/interfaces/IHomeContext";

export const assets = {
  p1,
  p2,
  linkedinLogo,
  reactLogo,
  me,
  bgImg,
};

export const tempPostData = {
  imgPath: me,
  title: "NovaTech",
  followers: 100,
  postTime: 32,
  desc: "This is the description area for the post.",
  postMedia: reactLogo,
  postDesc: "It is the time to start code.",
  likes: 73,
  comments: 44,
  reposts: 3,
};

export const postDataAssets: IPostData[] = [
  {
    profileImg: pr1,
    title: "NovaTech",
    followers: 100,
    postTime: 32,
    desc: "This is the description area for the post.",
    postMedia: {
      front: p1,
      sideOne: p2,
      sideTwo: p3,
      sideThree: p1,
    },

    postDesc:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quibusdam error sunt deserunt inventore? Provident voluptates illum perferendis et, reprehenderit eos, harum doloremque dolorum, id ipsam illo maxime dolores aut.",
    likes: 73,
    comments: 44,
    reposts: 3,
  },
  {
    profileImg: pr2,
    title: "FinTech",
    followers: 1000,
    postTime: 2,
    desc: "This is the description area for the post.",
    postMedia: {
      front: p2,
      sideOne: p3,
      sideTwo: p1,
      sideThree: p2,
    },

    postDesc:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quibusdam error sunt deserunt inventore? Provident voluptates illum perferendis et, reprehenderit eos, harum doloremque dolorum, id ipsam illo maxime dolores aut.",
    likes: 730,
    comments: 404,
    reposts: 30,
  },
  {
    profileImg: pr1,
    title: "NovaTech",
    followers: 100,
    postTime: 32,
    desc: "This is the description area for the post.",
    postMedia: {
      front: p1,
      sideOne: p2,
      sideTwo: p3,
      sideThree: p1,
    },

    postDesc:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quibusdam error sunt deserunt inventore? Provident voluptates illum perferendis et, reprehenderit eos, harum doloremque dolorum, id ipsam illo maxime dolores aut.",
    likes: 73,
    comments: 44,
    reposts: 3,
  },
  {
    profileImg: pr3,
    title: "NovaTech",
    followers: 100,
    postTime: 32,
    desc: "This is the description area for the post.",
    postMedia: {
      front: p3,
      sideOne: p1,
      sideTwo: p2,
      sideThree: p3,
    },
    postDesc:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quibusdam error sunt deserunt inventore? Provident voluptates illum perferendis et, reprehenderit eos, harum doloremque dolorum, id ipsam illo maxime dolores aut.",
    likes: 73,
    comments: 44,
    reposts: 3,
  },
  {
    profileImg: pr1,
    title: "NovaTech",
    followers: 100,
    postTime: 32,
    desc: "This is the description area for the post.",
    postMedia: {
      front: p1,
      sideOne: p2,
      sideTwo: p3,
      sideThree: p1,
    },

    postDesc:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quibusdam error sunt deserunt inventore? Provident voluptates illum perferendis et, reprehenderit eos, harum doloremque dolorum, id ipsam illo maxime dolores aut.",
    likes: 73,
    comments: 44,
    reposts: 3,
  },
];
