import { IPostData, IPostMedia } from "@/interfaces/IHomeContext";
import { ReactNode } from "react";

export type TMainContext = {
  postData: IPostData[];
  setStickyNav: React.Dispatch<React.SetStateAction<string>>;
  stickyNav: string;
  underline: string;
  setUnderline: React.Dispatch<React.SetStateAction<string>>;
  chatUnderline: string;
  setChatUnderline: React.Dispatch<React.SetStateAction<string>>;
  miniChat: boolean;
  setMiniChat: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TChildren = {
  children: ReactNode;
};

export type TPostActivityProps = {
  likes: number;
  comments: number;
  reposts: number;
};

export type TPostDescProps = {
  postDesc: string;
};

export type TPostMediaProps = {
  postMedia: IPostMedia;
};

export type TPostPerkProps = {
  desc: string;
};

export type TPosttittleProps = {
  profileImg: string;
  title: string;
  followers: number;
  postTime: number;
};
