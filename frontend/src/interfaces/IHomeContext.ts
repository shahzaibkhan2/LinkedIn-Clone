import { StaticImageData } from "next/image";

export interface IPostMedia {
  front: StaticImageData;
  sideOne: StaticImageData;
  sideTwo: StaticImageData;
  sideThree: StaticImageData;
}

export interface IPostData {
  profileImg: StaticImageData;
  title: string;
  followers: number;
  postTime: number;
  desc: string;
  postMedia: IPostMedia;
  postDesc: string;
  likes: number;
  comments: number;
  reposts: number;
}

export type IMainContextValues = {
  postData: IPostData[];
};
