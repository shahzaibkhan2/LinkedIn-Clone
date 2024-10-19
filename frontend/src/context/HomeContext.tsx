"use client";

import { postDataAssets } from "@/data/homeData";
import { IPostData } from "@/interfaces/IHomeContext";
import { TChildren, TMainContext } from "@/types/TPost";
import { createContext, useState } from "react";

export const HomeContext = createContext<TMainContext | null>(null);

// Types/Interfaces for children prop

const HomeContextProvider = ({ children }: TChildren) => {
  // <------------------------------ States ---------------------------------->

  const [postData, setPostData] = useState<IPostData[]>(postDataAssets);

  const [chatUnderline, setChatUnderline] = useState("focused");
  const [miniChat, setMiniChat] = useState(true);

  // <------------------------- Rendering Section (useEffects etc) ------------------>

  // <------------------------- Context Values ------------------------------->

  const contextValues = {
    postData,
    setPostData,
    chatUnderline,
    setChatUnderline,
    miniChat,
    setMiniChat,
  };

  return (
    <HomeContext.Provider value={contextValues}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
