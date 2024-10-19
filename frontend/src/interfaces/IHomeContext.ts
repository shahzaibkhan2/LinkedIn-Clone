export interface IPostMedia {
  front: string;
  sideOne: string;
  sideTwo: string;
  sideThree: string;
}

export interface IPostData {
  profileImg: string;
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
